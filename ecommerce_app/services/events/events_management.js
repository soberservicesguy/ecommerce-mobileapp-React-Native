const axios = require('axios')
const events = require('events');
const eventEmitter = new events.EventEmitter();
// var eventEmitter = require('EventEmitter');
import utils from '../utilities'
const url = utils.baseURL;

const {
	setObjectValue,
	getStoredObject,
	mergeToStoredObject,
	getAllKeys,
	append_message_to_messages,
} = require('./asyncstorage_function')

const { my_logger } = require('./my_custom_logger')

 // dont forget to try catch wrap entire function



// EVENT handeler functions start here
var handleNewSocket = function(object, room_string){

	my_logger(null, null, 'function_entering', 'handleNewSocket', 0)

	try{

		// 0 create socket and add to object.props.all_socket_rooms 
		let created_socket = joinRoom( object, room_string )
		object.props.add_to_socket_rooms( room_string, created_socket ) // SHOULD BE .set

		// 1 find all socket through all_socket_rooms
		let all_socket_rooms = object.props.all_socket_rooms

		// 2 find socket whom events not assigned
		let sockets_listening = object.props.sockets_listening.keys()

		all_socket_rooms.keys().map((socket_room) => {
			if ( !sockets_listening.includes(socket_room) ){
				// 3 assign socket events
				let _socket = all_socket_rooms.get(socket_room)
				assign_socket_events(_socket)

				// 4 store socket rooms
				// mergeToStoredObject('')
				let all_stored_keys = getAllKeys()
				if ( all_stored_keys.includes('socket_rooms') ){
					mergeToStoredObject('socket_rooms', socket_room)
				} else {
					setObjectValue('socket_rooms', socket_room)
				}
			}
		})
		
		// my_logger('returned_value', returned_value, 'function_returning', 'handleNewSocket', 0)
		// return 

	} catch (err) {
		console.log(err)
		// my_logger('err', err, 'error', 'handleNewSocket', 0)

	}

	my_logger(null, null, 'function_exiting', 'handleNewSocket', 0)
	
}




var handleChatnodeAddition = async function(object, new_chatnode){

	my_logger(null, null, 'function_entering', 'handleChatnodeAddition', 0)

	try{

		const {count, last_message} = messageCountAndLastMessageToRelevantChatNode(object, new_chatnode.room_string)

		// 1 store in chatnode storage
		let all_keys = await getAllKeys()
		if ( all_keys.include('chatnodes') ){
			// let currentDate = new Date().toLocaleDateString("en-US").split("/").join(" | ");
			// let currentTime = new Date().toLocaleTimeString("en-US").split("/").join(" | ");
			let unix_time = new Date()

			let number1 = object.props.own_number
			let number2 = new_chatnode.phone_number
			let room_string = ( Number(number1) < Number(number2) ) ? `${number1}-${number2}+` : `${number2}-${number1}+`

			let chatnode_with_timestamp = {...new_chatnode, room_string: room_string, timestamp: unix_time, count:count, last_message:last_message}
			// HERE CHATNODES ARE APPEARING TWICE NOW, ONE WITH TIMESTAMP AND ONE WITHOUT
			await mergeToStoredObject('chatnodes', chatnode_with_timestamp)
		}
		// 2 give chatnode storage to redux for re-render
			// sorting according to latest chat node addition
		sort_and_make_chatnodes_proper(object)
		// let chat_nodes = await getStoredObject('chatnodes')

		// chat_nodes.sort(function sortByUnixTime(a, b){
		// 	let time1 = a.timestamp;
		// 	let time2 = b.timestamp;
		// 	return time1 - time2;
		// });

		// console.log('====================chat_nodes==================')
		// console.log(chat_nodes)

		// if ( !chat_nodes.includes(null) && !chat_nodes.includes(undefined)){
		// 	object.props.set_chatnodes( (chat_nodes == null ? [] : chat_nodes) )
		// }

		// 3 create sockets out of chat nodes
		object.props.all_chatnodes.map((chat_node_object) => {
			let room_string = chat_node_object.room_string
			eventEmitter.emit('new_entry_in_socket', object, room_string);
		})

		// my_logger('returned_value', returned_value, 'function_returning', 'handleChatnodeAddition', 0)
		// return 

	} catch (err) {
		console.log(err)
	}

	my_logger(null, null, 'function_exiting', 'handleChatnodeAddition', 0)
	
}



var handleMessageAddition = async function(object, new_message){

// 1 store in messages
	// setObjectValue('stored_messages', new_message)
	// new_message = JSON.stringify(new_message)
	append_message_to_messages( new_message )
// 2 give stored_messages to redux for re-render
	// let stored_messages = getStoredObject('stored_messages') // NOT USED IN REMAINING OF CODE
	// object.props.add_to_messages( new_message ) // NOT NEEDED HERE BUT INSIDE

	if (new_message.room_string === object.props.current_chat_screen_room_string){
		// if user is on some particular room / chat node
		console.log('added meesage into current screen')

		// NOT NEEDED, IT WILL BE ONLY USED TO RECIEVE AND NOT TO SEND
		// object.props.add_to_new_message_of_current_room( new_message )
		object.props.add_to_messages( new_message )
		
	} else {
		// take all_chatnodes and set last message and unread messages in it	
		// let chat_nodes_after_last_messages_and_unread_count = []

		sort_and_make_chatnodes_proper(object)
		// let chat_node = {}
		// for (let i = 0; i < object.props.all_chatnodes.length; i++) {

		// 	chat_node = object.props.all_chatnodes[i]
		// 	let {count, last_message} = await messageCountAndLastMessageToRelevantChatNode(object, chat_node.room_string)
		// 	let unix_time = new Date()
		// 	let chat_node_proper = {...chat_node, timestamp: unix_time, count:count, last_message: last_message}
		// 	chat_nodes_after_last_messages_and_unread_count.push( chat_node_proper )

		// } 
		
		// // sort the chat_nodes
		// chat_nodes_after_last_messages_and_unread_count.sort(function sortByUnixTime(a, b){
		// 	let time1 = a.timestamp;
		// 	let time2 = b.timestamp;
		// 	return time2 - time1;
		// });

		// console.log('====================chat_nodes_after_last_messages_and_unread_count==================')
		// console.log(chat_nodes_after_last_messages_and_unread_count)

		// if ( !chat_nodes_after_last_messages_and_unread_count.includes(null) && !chat_nodes_after_last_messages_and_unread_count.includes(undefined)){
		// 	object.props.set_chatnodes( (chat_nodes_after_last_messages_and_unread_count == null ? [] : chat_nodes_after_last_messages_and_unread_count) )
		// }

	}

	sort_and_make_chatnodes_proper(object)
// GETTING OTHER PERSONS NUMBER FROM ROOM_STRING
	let number_pattern1 = /\d+(?=\-)/
	let phone_number1 = senders_details.match( number_pattern1 )

	let number_pattern2 = /\d+(?=\+)/
	let phone_number2 = senders_details.match( number_pattern2 )

	let other_persons_number = (phone_number1 === object.props.own_number) ? phone_number2 : phone_number1

// MAKE THE OTHER PERSON TO JOIN ROOM WITH YOU
	object.props.live_socket.emit('bring-someone-to-your-room', {user_phone_number: other_persons_number, room_string: new_message.room_string})

// 2.5 send message to the backend
	axios.post(url + '/messages/save-message', 
		{
			user_details_list:[
				{
					user_phone_number:object.props.own_number,
					user_name:object.props.own_name,
					// display_picture:,
				},
				{
					user_phone_number:other_persons_number,
					user_name:'',
					// display_picture:,
				}
			],
			room_string: new_message.room_string,
			message_state: new_message.message_state,
			sent_time: new_message.sent_time,
			text: new_message.text,
			senders_details: new_message.senders_details,
			// sent_by: object.props.own_number,
			// senders_name: object.props.own_name,
			// IF ROOM NOT CREATED, THEN BOTTOM CAN BE PASSED TOO, BUT ITS CREATED WHEN CHAT NODE WAS
			// user_details_list:[
			// 	{user_phone_number:'', user_name:'', display_picture:''},
			// ]
		}
	)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.log(error);
	});
	
// 3 send message to socket to deliver when online
	// IF INTERNET IS ACTIVE THEN SEND MESSAGE TO SOCKET, ELSE SEND TO ASYNCSTORAGE 
	if (object.props.is_internet_connected){
		console.log('-----------------INTERNET IS CONNECTED---------------')
		console.log('------------------SENDING MESSAGE-------------------------')
		
		let socket = object.props.live_socket
		socket.emit( 'join-room', {room_string: new_message.room_string} )
		socket.emit('new-message', {
			// user_details: user_details, 
			message: new_message
		})
		// sendMessageInSocket(object, new_message, new_message.room_string)
	
	} else {
		await getStoredObject('offline_messages')
		.then((all_messages) => {
			all_messages = [...all_messages, {new_message: new_message, room: new_message.room_string}]
			return all_messages		
		})
		.then((all_messages) => {
			setObjectValue('stored_messages', all_messages)
			return 	all_messages
		})

		// let jsonified_message = JSON.stringify({new_message: new_message, room: new_message.room_string})

		// await AsyncStorage.setItem('offline_messages', jsonified_message)
	}
	// CHECK IF THERE IS CHAT NODE FOR IT, IF NOT CREATE IT
	create_chatnode_if_not_exists(object, new_message)
		// let chat_nodes = object.props.all_chatnodes.filter(
		// 	function(item){
		// 		return item.room_string === new_message.room_string
		// 	}
		// )

		// if ( chat_nodes.length === 0  ){
		// 	let count = 0
		// 	let last_message = new_message 
		// 	let unix_time = new Date()

		// 	console.log('------------new_message.senders_details---------------')
		// 	console.log(new_message.senders_details)
		// 	console.log(new_message)
		// 	// let senders_details = String( new_message.senders_details )

		// 	let name_pattern1 = /\d+(?=\-)/
		// 	let phone_number1 = new_message.room_string.match( name_pattern1 )[0]
		// 	// console.log( name_pattern.test(new_message.room_string) )

		// 	console.log('-----------------phone_number1 FOUND---------------')
		// 	console.log(phone_number1)

		// 	let number_pattern2 = /\d+(?=\+)/
		// 	let phone_number2 = new_message.room_string.match( number_pattern2 )[0]

		// 	console.log('-----------------phone_number2 FOUND---------------')
		// 	console.log(phone_number2)

		// 	let phone_number = ( phone_number1 === object.props.own_number ) ? phone_number2 : phone_number1

		// 	// console.log('-----------------NUMBER FOUND---------------')
		// 	// console.log(phone_number)

		// 	// console.log( number_pattern.test(senders_details) )

		// 	let chat_node_proper = {
		// 		display_name: phone_number, 
		// 		phone_number: phone_number,
		// 		room_string: new_message.room_string,				

		// 		timestamp: unix_time, 
		// 		count:count, 
		// 		last_message: last_message,
		// 	}

		// 	console.log('====================chat_node_proper==================')
		// 	console.log(chat_node_proper)

		// 	if ( chat_node_proper != null && chat_node_proper != undefined){
		// 		object.props.add_to_chatnodes( chat_node_proper )
		// 	}
		// }


	// 4 when online, connect to socket and deliver all undelivered messages		


}





var handleMessageRecieving = async function(object, new_message){
	// console.log('-----------------HANDLING RECIEVED MESSAGE-----------------------')
	console.log("===================== NEW MESSAGE IS BELOW =====================")
	console.log(new_message)

// 1 store in messages
	// setObjectValue('stored_messages', new_message)
	// new_message = JSON.stringify(new_message)
	append_message_to_messages( new_message )
// 2 give stored_messages to redux for re-render
	// let stored_messages = getStoredObject('stored_messages') // NOT USED IN REMAINING OF CODE
	// I DONT THINK IT HAS TO BE PUT ON ALL MESSAGES IN REDUX SO COMMENTING OFF
	// object.props.add_to_messages( new_message ) // NOT NEEDED HERE BUT INSIDE

	if (new_message.room_string === object.props.current_chat_screen_room_string){

		// if user is on some particular room / chat node
		console.log('added meesage into current screen')

		// NOT NEEDED, IT WILL BE ONLY USED TO RECIEVE AND NOT TO SEND
		// object.props.add_to_new_message_of_current_room( new_message )

		console.log('-----------ALL CHATNODES ARE BELOW----------------')
		console.log(object.props.all_chatnodes)
	// OLD
		// object.setState(
		// 	prev => { 
		// 		new_message.message_state = 'seen'
				
		// 		console.log('----------------------prev.messages--------------------')
		// 		console.log(prev.messages)

		// 		let prev_messages = (prev.messages == undefined ) ? [] : [...prev.messages]
		// 		return {...prev, messages:[...prev_messages, new_message] }
		// 	}
		// )
		// .catch((err) => {
		// 	console.log('-------------error while setState--------------')
		// 	console.log(err)
		// })
	// NEW
	// NOT EVEN NEW NEEDED, ITS DOUBLING
		// object.props.add_to_messages( new_message )

		object.props.add_to_messages( new_message )

	} else {
		console.log('========TRIGGERED=========')
	// ADDING TO ASYNC STORAGE
		// append_message_to_messages( new_message ) //DOUBLING
		// create_chatnode_if_not_exists(object, new_message)
		// sort_and_make_chatnodes_proper(object)
	}
	create_chatnode_if_not_exists(object, new_message)
	sort_and_make_chatnodes_proper(object)

	console.log('-----------------RECIEVED MESSAGE HANDLED-----------------------')	
}






function handle_back_to_online(object){

	goOnline(object)
	
}




function create_chatnode_if_not_exists(object, new_message){
// CHECK IF THERE IS CHAT NODE FOR IT, IF NOT CREATE IT		
	let chat_nodes = object.props.all_chatnodes.filter(
		function(item){
			return item.room_string === new_message.room_string
		}
	)

	console.log('-------------------------matched chat_nodes------------------------')
	console.log(chat_nodes)

	if ( chat_nodes.length === 0  ){
		let count = 0
		let last_message = new_message 
		let unix_time = new Date()

		// console.log('------------new_message.senders_details---------------')
		// console.log(new_message.senders_details)

		let senders_details = String( new_message.senders_details )

		let name_pattern = /\w+(?=\-)/
		let name = senders_details.match( name_pattern )
		// console.log( name_pattern.test(senders_details) )

		// console.log('-----------------NAME FOUND---------------')
		// console.log(name)

		let number_pattern = /\d+(?=\+)/
		let phone_number = senders_details.match( number_pattern )

		// console.log('-----------------NUMBER FOUND---------------')
		// console.log(phone_number)

		// console.log( number_pattern.test(senders_details) )

		let chat_node_proper = {
			display_name: name,
			phone_number: phone_number,
			room_string: new_message.room_string,				

			timestamp: unix_time, 
			count:count, 
			last_message: last_message,
		}
		// if ( chat_node_proper != null && chat_node_proper != undefined){
			console.log('----------------------chat_node_proper------------------------')
			console.log(chat_node_proper)
			object.props.add_to_chatnodes( chat_node_proper )
		// }
	}

}

async function sort_and_make_chatnodes_proper(object){
	// take all_chatnodes and set last message and unread messages in it	
	let chat_nodes_after_last_messages_and_unread_count = []
	let chat_node = {}
	for (let i = 0; i < object.props.all_chatnodes.length; i++) {
	
		chat_node = object.props.all_chatnodes[i]
		let {count, last_message} = await messageCountAndLastMessageToRelevantChatNode(object, chat_node.room_string)
		let unix_time = new Date()
		let chat_node_proper = {...chat_node, timestamp: unix_time, count:count, last_message: last_message}
		chat_nodes_after_last_messages_and_unread_count.push( chat_node_proper )
	
	} 

	// sort the chat_nodes
	chat_nodes_after_last_messages_and_unread_count.sort(function sortByUnixTime(a, b){
		let time1 = a.timestamp;
		let time2 = b.timestamp;
		return time2 - time1;
	});

	console.log('====================chat_nodes_after_last_messages_and_unread_count==================')
	console.log(chat_nodes_after_last_messages_and_unread_count)

	// if ( !chat_nodes_after_last_messages_and_unread_count.includes(null) && !chat_nodes_after_last_messages_and_unread_count.includes(undefined)){
		
	object.props.set_chatnodes( (chat_nodes_after_last_messages_and_unread_count == null ? [] : chat_nodes_after_last_messages_and_unread_count) )
	// }

}

//Assign the event handler to an event:
eventEmitter.on('new_entry_in_chatnodes', handleChatnodeAddition);
eventEmitter.on('new_entry_in_message', handleMessageAddition);
eventEmitter.on('new_entry_in_recieved_message', handleMessageRecieving);
eventEmitter.on('new_entry_in_socket', handleNewSocket);
eventEmitter.on('back_online', handle_back_to_online);

async function emit_new_message_recieved(object, data){
	eventEmitter.emit('new_entry_in_recieved_message', object, data);
}

async function emit_new_chatnode(object, new_chatnode){
	eventEmitter.emit('new_entry_in_chatnodes', object, new_chatnode);
}


module.exports = {
	eventEmitter,
	emit_new_message_recieved,
	emit_new_chatnode,
}