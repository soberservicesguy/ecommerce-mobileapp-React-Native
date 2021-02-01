import React, {Component} from 'react';
// IMPORT classes to use
import { 
	PermissionsAndroid,
	ImageBackground,
	View,
	StyleSheet, 
	Button,
	Text,
	TouchableOpacity,
	TextInput,
	// TouchableHighlight,
} from "react-native";

// IMPORT connected components
// import {ConnectedSomeComponent} from "../redux_stuff/connected_components";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Icon } from 'react-native-elements';
import axios from 'axios';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import utils from "../utilities";

import { verify_privilege } from "../handy_functions/"


class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {

			phone_number: '',
			password:'',

		}
	}

	componentDidMount(){

	}

	make_request_to_protected_route(){

		axios.get(utils.baseUrl + '/users/protected')
		.then(function (response) {
			if (response.data.success === true){

				console.log(response.data)

			} else {
				console.log(response.data)
				console.log('not authorized')
			}

		})
		.catch(function (error) {
			// console.log(error);
		});	
	}

	login_and_get_jwt_token_and_privileges(){

		axios.post(utils.baseUrl + '/users/login', 
			{
				phone_number:this.state.phone_number, 
				password:this.state.password
			}
		)
		.then(function (response) {
			if (response.data.success === true){

				// console.log(response.data)
				axios.defaults.headers.common['Authorization'] = response.data.token				
				this.props.set_is_signed_in( true )
				this.props.set_phone_number( this.state.phone_number )

				verify_privilege(this, response.data.privileges)

			} else {
				console.log('couldnt login')
			}

		})
		.catch(function (error) {
			// console.log(error);
		});	
	}

	render() {
		return(

			<View style={styles.screenContainer}>
				
				<View style={styles.buttonContainer}>
					<TouchableOpacity activeOpacity={0.2} onPress={() => {}} style={styles.roundButton}>
						<Text style={styles.innerText}>
							LOGIN WITH FACEBOOK
						</Text>
					</TouchableOpacity>
				</View>

			
				<View style={styles.orContainer}>
					<View style={styles.leftBar}>
					</View>

					<View style={styles.orTextChild}>
						<Text style={styles.orText}>
							OR
						</Text>
					</View>

					<View style={styles.rightBar}>
					</View>
				</View>

				<Text style={styles.headingOverInputs}>
					PHONE NUMBER
				</Text>

				<View style={styles.textinputContainer}>
					<TextInput
						style={styles.textinput}
						placeholder="Type your phone number"
						placeholderTextColor = {utils.lightGrey}
						// maxLength=10
						// caretHidden=true
						// multiline=true
						// numberOfLines=3
						// onChangeText={ () => null }
						// value='dummy'
						// autoFocus=true
						onChangeText={ (value) =>  this.setState(prev => ({...prev, phone_number: value})) }
					/>
				</View>

				<Text style={styles.headingOverInputs}>
					PASSWORD
				</Text>

				<View style={styles.textinputContainer}>
					<TextInput
						style={styles.textinput}
						placeholder="Type your password"
						placeholderTextColor = {utils.lightGrey}
						// maxLength=10
						// caretHidden=true
						// multiline=true
						// numberOfLines=3
						// onChangeText={ () => null }
						// value='dummy'
						// autoFocus=true
						onChangeText={ (value) =>  this.setState(prev => ({...prev, password: value})) }
					/>
				</View>
					

				<TouchableOpacity activeOpacity={0.2} onPress={() => {}} style={styles.buttonWithoutBG}>
					<Text style={styles.forGotPasswordText}>
						Forgot your password ?
					</Text>
				</TouchableOpacity>


				<TouchableOpacity activeOpacity={0.2} onPress={() => this.login_and_get_jwt_token_and_privileges()} style={styles.bottomButton}>
					<Icon
					  // raised
					  name={utils.righAeroIcon}
					  type='font-awesome'
					  // iconStyle='Outlined'
					  color='#ffffff'
					  size={40}
					/>
				</TouchableOpacity>


{/*				<Button 
					title={'LOGOUT'}
					style={styles.lowerButton} activeOpacity={0.2}
					onPress={ () => this.logout_and_remove_jwt_token() }
				/>
*/}
			</View>
		);

	}
}


const styles = StyleSheet.create({
	screenContainer:{
		alignItems:'center',
		flex:1,
		// display:'flex',
		// flexDirection: 'column',
		alignItems:'center',
		justifyContent: 'space-between', 
		backgroundColor: '#ffffff',
	},

// roundbutotn
	buttonContainer:{
		marginTop: windowHeight * 0.04,
		justifyContent: 'center',
		alignSelf:'center',
		height:100,
		width:'80%',
	},
	roundButton:{
		borderRadius:50,
		borderColor:utils.darkBlue,
		borderWidth:2,
		backgroundColor: utils.darkBlue,
		borderStyle:'solid',
		width:'100%',
		paddingTop:15,
		paddingBottom:15,
	},
	innerText:{
		textAlign:'center',
		fontSize: 20,
		color: 'white',
	},

// or container
	orContainer:{
		// backgroundColor: '#000000',
		marginTop:20,
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
		justifyContent: 'center',
		width:'80%',
	},
	orText:{
		color:utils.lightGrey,
		fontSize:20,
		textAlign:'center',
	},
	orTextChild:{
		flex:1,
	},
	rightBar:{
		flex:3,
		borderBottomWidth:1,
		borderColor:utils.lightGrey,
		width:'100%',
	},
	leftBar:{
		flex:3,
		borderBottomWidth:1,
		borderColor:utils.lightGrey,
	},

	headingOverInputs:{
		// backgroundColor: '#000000',
		marginTop: windowHeight * 0.05,
		marginBottom: windowHeight * 0.01,
		textAlign:'left',
		width: '80%',
		fontSize: 17,
		fontWeight: 'bold',
	},

// text inputs
	textinputContainer:{	
		width: '80%',
	},
	textinput:{
		// backgroundColor: '#000000',
		// marginTop:10,
		textAlign:'left',
		borderWidth:1,
		borderColor:(utils.lightGrey),
		borderStyle:'solid',
		paddingLeft:20,
		paddingTop:17,
		paddingBottom:17,
		fontSize:18,
	},

// forgot password button
	buttonWithoutBG:{
		marginTop:windowHeight * 0.05,
		marginBottom:windowHeight * 0.05,
	},
	forGotPasswordText:{
		color: utils.lightGrey,
		fontSize: 20,
	},

// bottom button
	bottomButton:{
		height: windowHeight * 0.1,
		width: '100%',
		backgroundColor: utils.lightGreen,
		justifyContent: 'center',
		alignItems:'center', 
	}

})

export default LoginScreen