import AsyncStorage from '@react-native-community/async-storage';

const { my_logger } = require('./my_custom_logger')

setObjectValue = async (key, value) => {

	my_logger(null, null, 'function_entering', 'setObjectValue', 0)

	try {
		const jsonValue = JSON.stringify(value)
		await AsyncStorage.setItem(key, jsonValue)
		// my_logger(returned_value, 'function_returning', 'setObjectValue', 0)
		// return 
	} catch (err) {

		my_logger('err', err, 'error', 'setObjectValue', 0)


	}
	
	my_logger( 'key', key, 'value', 'setObjectValue' , 0)
	my_logger( 'value', value, 'value', 'setObjectValue' , 0)
	// console.log(`Done. ${key} with ${value}`)
	
	my_logger(null, null, 'function_exiting', 'setObjectValue', 0)
	
}

getStoredObject = async (key) => {

	my_logger(null, null, 'function_entering', 'getStoredObject', 0)

	try{

		const jsonValue = await AsyncStorage.getItem(key)
		
		my_logger('jsonValue', jsonValue != null ? JSON.parse(jsonValue) : null, 'function_returning', 'getStoredObject', 0)

		return jsonValue != null ? JSON.parse(jsonValue) : null

	} catch (err) {

		my_logger('err', err, 'error', 'getStoredObject', 0)

	}

	my_logger(null, null, 'function_exiting', 'getStoredObject', 0)
	
}


mergeToStoredObject = async (key, value) => {

	my_logger(null, null, 'function_entering', 'mergeToStoredObject', 0)

	try{

		
		const jsonValue = await AsyncStorage.mergeItem(key, JSON.stringify(value))


		// my_logger(returned_value, 'function_returning', 'mergeToStoredObject', 0)
		// return 

	} catch (err) {

		my_logger('err', err, 'error', 'mergeToStoredObject', 0)

	}

	my_logger(null, null, 'function_exiting', 'mergeToStoredObject', 0)
	
}

// GET ALL STORED STUFF
getAllKeys = async () => {

	my_logger(null, null, 'function_entering', 'getAllKeys', 0)

	try{
		let keys = []

		
		keys = await AsyncStorage.getAllKeys()


		my_logger('keys', keys, 'function_returning', 'getAllKeys', 0)
		// return 
		return keys

	} catch (err) {

		my_logger('err', err, 'error', 'getAllKeys', 0)


	}

	my_logger(null, null, 'function_exiting', 'getAllKeys', 0)
	
}

append_message_to_messages = async (message) => {

	my_logger(null, null, 'function_entering', 'append_message_to_messages', 0)

	try{

		getStoredObject('stored_messages')
		.then((all_messages) => {
			all_messages = [...all_messages, message]
			return all_messages		
		})
		.then(async (all_messages) => {
			await setObjectValue('stored_messages', all_messages)

			my_logger('all_messages', all_messages, 'function_returning', 'append_message_to_messages', 0)
			// return 
			return 	all_messages
		})


	} catch (err) {

		my_logger('err', err, 'error', 'append_message_to_messages', 0)

	}

	my_logger(null, null, 'function_exiting', 'append_message_to_messages', 0)

}

set_messages_as_empty_array = async () => {

	my_logger(null, null, 'function_entering', 'set_messages_as_empty_array', 0)

	try{

		setObjectValue('stored_messages', [])
		
		// my_logger('returned_value', returned_value, 'function_returning', 'set_messages_as_empty_array', 0)
		// return 

	} catch (err) {

		my_logger('err', err, 'error', 'set_messages_as_empty_array', 0)

	}

	my_logger(null, null, 'function_exiting', 'set_messages_as_empty_array', 0)

}

set_offline_messages_as_empty_array = async () => {

	my_logger(null, null, 'function_entering', 'set_offline_messages_as_empty_array', 0)

	try{

		setObjectValue('offline_messages', [])
	
		// my_logger('returned_value', returned_value, 'function_returning', 'set_offline_messages_as_empty_array', 0)
		// return 

	} catch (err) {

		my_logger('err', err, 'error', 'set_offline_messages_as_empty_array', 0)

	}

	my_logger(null, null, 'function_exiting', 'set_offline_messages_as_empty_array', 0)
	
}

set_chatnodes_as_empty_array =  async () => {

	my_logger(null, null, 'function_entering', 'set_chatnodes_as_empty_array', 0)

	try{

		setObjectValue('all_chatnodes', [])	
		
		// my_logger('returned_value', returned_value, 'function_returning', 'set_chatnodes_as_empty_array', 0)
		// return 

	} catch (err) {

		my_logger('err', err, 'error', 'set_chatnodes_as_empty_array', 0)

	}

	my_logger(null, null, 'function_exiting', 'set_chatnodes_as_empty_array', 0)
	
}

module.exports = {
	setObjectValue,
	getStoredObject,
	mergeToStoredObject,
	getAllKeys,
	append_message_to_messages,
	set_messages_as_empty_array,
	set_offline_messages_as_empty_array,
	set_chatnodes_as_empty_array,
}