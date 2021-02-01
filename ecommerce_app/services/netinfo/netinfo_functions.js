import NetInfo from "@react-native-community/netinfo";
const { my_logger } = require('./my_custom_logger')

 // dont forget to try catch wrap entire function


function check_connection_status(){

	my_logger(null, null, 'function_entering', 'check_connection_status', 0)

	try{

		NetInfo.fetch().then(state => {
			// console.log("Connection type", state.type);
			// console.log("Is connected?", state.isConnected);
			return {
				isConnected:state.isConnected,
				type:state.type, // wifi / cellular / bluetooth / ethernet / wimax / vpn 
				isInternetReachable: state.isInternetReachable,
				isWifiEnabled: state.isWifiEnabled, // ANDROID ONLY
				details: state.details,
				NetInfoCellularGeneration: state.NetInfoCellularGeneration, // null / 2g / 3g / 4g
			}
		});
	

		// my_logger('returned_value', returned_value, 'function_returning', 'check_connection_status', 0)
		// return 

	} catch (err) {

		my_logger('err', err, 'error', 'check_connection_status', 0)


	}

	my_logger(null, null, 'function_exiting', 'check_connection_status', 0)
	
}


module.exports = {
	check_connection_status,
}




// BELOW IS FOR HOOKS, SO NOT USEFUL FO RME

// import {useNetInfo} from "@react-native-community/netinfo"; // THIS IS STATE

// const internet_type = useNetInfo().type
// const connection_state = useNetInfo().isConnected.toString()

// function get_wifi_state(){
// 	NetInfo.fetch("wifi").then(state => {
// 		console.log("Connection type", state.type);
// 		console.log("Is connected?", state.isConnected);
// 		console.log("SSID", state.details.ssid);
// 		console.log("BSSID", state.details.bssid);

// 		return {type: state.type, isConnected: state.isConnected, SSID: state.details.ssid, BSSID: state.details.bssid}
// 	})
// }

// function get_internet_state(){
// 	NetInfo.fetch().then(state => {
// 		console.log("Connection type", state.type);
// 		console.log("Is connected?", state.isConnected);
// 		console.log("SSID", state.details.ssid);
// 		console.log("BSSID", state.details.bssid);

// 		return {type: state.type, isConnected: state.isConnected, SSID: state.details.ssid, BSSID: state.details.bssid}
// 	});
// }

// // const YourComponent = () => {
// // 	const netInfo = useNetInfo();

// // 	return (
// // 		<View>
// // 			<Text>Type: {netInfo.type}</Text>
// // 			<Text>Is Connected? {netInfo.isConnected.toString()}</Text>
// // 		</View>
// // 	);
// // };

// // Subscribe
// // const unsubscribe = NetInfo.addEventListener(state => {
// // 	console.log("Connection type", state.type);
// // 	console.log("Is connected?", state.isConnected);
// // });

// // Unsubscribe
// // unsubscribe();



// module.exports = {
// 	get_wifi_state,
// 	get_internet_state,
// 	internet_type,
// 	connection_state,
// }