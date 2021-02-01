import { 
	PermissionsAndroid,
	Platform,
} from "react-native";

const { my_logger } = require('./my_custom_logger')

async function netinfo_permission(object){
	// if( object.props.network_state_permission === false ){

	my_logger(null, null, 'function_entering', 'netinfo_permission', 0)

	try{

		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_NETWORK_STATE,
			{
				title: 'Internet State',
				message: 'This app would like to view your internet connection.',
				buttonNeutral: "Ask Me Later",
				buttonNegative: "Cancel",
				buttonPositive: "OK"
			}
		);
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			object.props.set_network_state_permission( true )
			console.log("You can use the internet connection");

			// contacts_write_permission(object)

		} else {
			console.log("Contacts Reading permission denied");
		}		


		// my_logger('returned_value', returned_value, 'function_returning', 'netinfo_permission', 0)
		// return 

	} catch (err) {

		my_logger('err', err, 'error', 'netinfo_permission', 0)


	}

	my_logger(null, null, 'function_exiting', 'netinfo_permission', 0)
	
}


async function request_multiple_permissions(){

	my_logger(null, null, 'function_entering', 'request_multiple_permissions', 0)

	try{

				PermissionsAndroid.requestMultiple(
					[
						PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
						PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,

						// PermissionsAndroid.PERMISSIONS.CAMERA, 
						// PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
						// PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
						// PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
						// PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
						// PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
					]
				).then((result) => {
					// if (
					// // && result['android.permission.READ_CONTACTS']
					// // && result['android.permission.READ_EXTERNAL_STORAGE']
					// // && result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted') {
					// result['android.permission.READ_CONTACTS']
					// && result['android.permission.WRITE_CONTACTS']
					// && result['android.permission.ACCESS_NETWORK_STATE'] === 'granted') {
					// 	this.setState({
					// 		permissionsGranted: true
					// 	});
					// } else if (result['android.permission.READ_CONTACTS']
					// || result['android.permission.WRITE_CONTACTS']
					// || result['android.permission.ACCESS_NETWORK_STATE'] === 'never_ask_again') {
					// // || result['android.permission.ACCESS_FINE_LOCATION']
					// // || result['android.permission.READ_EXTERNAL_STORAGE']
					// // || result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'never_ask_again') {

					// 	// object.refs.toast.show('Please Go into Settings -> Applications -> APP_NAME -> Permissions and Allow permissions to continue');
					// }
				});
		// my_logger('returned_value', returned_value, 'function_returning', 'request_multiple_permissions', 0)
		// return 

	} catch (err) {

		my_logger('err', err, 'error', 'request_multiple_permissions', 0)


	}

	my_logger(null, null, 'function_exiting', 'request_multiple_permissions', 0)
	
}

async function contacts_read_and_write_permission(object){

	my_logger(null, null, 'function_entering', 'contacts_read_and_write_permission', 0)

	try{

		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
			{
				title: 'Contacts',
				message: 'This app would like to view your contacts.',
				buttonNeutral: "Ask Me Later",
				buttonNegative: "Cancel",
				buttonPositive: "OK"
			}
		);
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			// console.log("You can use the camera");

			contacts_write_permission(object)

		} else {
			console.log("Contacts Reading permission denied");
		}
		
		// my_logger('returned_value', returned_value, 'function_returning', 'contacts_read_and_write_permission', 0)
		// return 

	} catch (err) {

		my_logger('err', err, 'error', 'contacts_read_and_write_permission', 0)

	}

	my_logger(null, null, 'function_exiting', 'contacts_read_and_write_permission', 0)
	
}

async function contacts_write_permission(object){

	my_logger(null, null, 'function_entering', 'contacts_write_permission', 0)

	try{

		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
			{
				'title': 'Contacts',
				'message': 'This app would like to view your contacts.',
				'buttonPositive': 'Please accept bare mortal'
			}
		)

		if (granted === PermissionsAndroid.RESULTS.GRANTED) {

			object.props.set_permissions_granted_for_contacts(true)
			console.log("You can use the contacts reading and writing");

		} else {
			console.log("Contacts Writing permission denied");
		}
		
		// my_logger('returned_value', returned_value, 'function_returning', 'contacts_write_permission', 0)
		// return 

	} catch (err) {

		my_logger('err', err, 'error', 'contacts_write_permission', 0)


	}

	my_logger(null, null, 'function_exiting', 'contacts_write_permission', 0)
	
}


module.exports = {
	contacts_read_and_write_permission,
	netinfo_permission,
	request_multiple_permissions,
}


// Permissions that require prompting the user

// Available as constants under PermissionsAndroid.PERMISSIONS:

// 	   ACCESS_NETWORK_STATE: 'android.permission.ACCESS_NETWORK_STATE' 
//     READ_CALENDAR: 'android.permission.READ_CALENDAR'
//     WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR'
//     CAMERA: 'android.permission.CAMERA'
//     READ_CONTACTS: 'android.permission.READ_CONTACTS'
//     WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS'
//     GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS'
//     ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION'
//     ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION'
//     RECORD_AUDIO: 'android.permission.RECORD_AUDIO'
//     READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE'
//     CALL_PHONE: 'android.permission.CALL_PHONE'
//     READ_CALL_LOG: 'android.permission.READ_CALL_LOG'
//     WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG'
//     ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL'
//     USE_SIP: 'android.permission.USE_SIP'
//     PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS'
//     BODY_SENSORS: 'android.permission.BODY_SENSORS'
//     SEND_SMS: 'android.permission.SEND_SMS'
//     RECEIVE_SMS: 'android.permission.RECEIVE_SMS'
//     READ_SMS: 'android.permission.READ_SMS'
//     RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH'
//     RECEIVE_MMS: 'android.permission.RECEIVE_MMS'
//     READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE'
//     WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE'

// Result strings for requesting permissions

// Available as constants under PermissionsAndroid.RESULTS:

//     GRANTED: 'granted'
//     DENIED: 'denied'
//     NEVER_ASK_AGAIN: 'never_ask_again'


// check(permission);
// request(permission, [rationale]);
