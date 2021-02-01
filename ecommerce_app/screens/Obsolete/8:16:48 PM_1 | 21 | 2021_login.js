
import React, {Component} from 'react';
// IMPORT classes to use
import { 
	PermissionsAndroid,
	ImageBackground,
	View,
	StyleSheet, 
	// Button,
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

//  import { 
//	setObjectValue,
//	set_messages_as_empty_array,
//	set_offline_messages_as_empty_array,
//	set_chatnodes_as_empty_array,
//  } from "../handy_functions/asyncstorage_function"

// import {
//	contacts_read_and_write_permission,
// } from "../handy_functions/permissions_functions"

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {

			user_name: '',
			phone_number: '',
			user_image: '',
			hash: '',
			salt: '',
			user_name: '',
			phone_number: '',
			user_image: '',
			hash: '',
			salt: '',
			user_name: '',
			phone_number: '',
			user_image: '',
			hash: '',
			salt: '',

		}
	}

	componentDidMount(){
				
		// set_messages_as_empty_array() // DANGEROUS, THIS DELETES ALL PREVIOUS MESSAGES
		// set_offline_messages_as_empty_array() // DANGEROUS, THIS DELETES ALL PREVIOUS MESSAGES
		// set_chatnodes_as_empty_array() // DANGEROUS, THIS DELETES ALL PREVIOUS MESSAGES
		// contacts_read_and_write_permission(this)

	}


	storeDataAtBackend(){
		axios.post(utils.baseUrl + '/blogposts/create-user', 
			{
				user_name: this.state.user_name,
				phone_number: this.state.phone_number,
				user_image: this.state.user_image,
				hash: this.state.hash,
				salt: this.state.salt,
				user_name: this.state.user_name,
				phone_number: this.state.phone_number,
				user_image: this.state.user_image,
				hash: this.state.hash,
				salt: this.state.salt,
				user_name: this.state.user_name,
				phone_number: this.state.phone_number,
				user_image: this.state.user_image,
				hash: this.state.hash,
				salt: this.state.salt,
			}
		)
		.then(function (response) {
			console.log(`POST rest call response is${JSON.stringify(response.data, null, 1)}`);
			if (response.data.success === true){
				// console.log('yes')
			}

			return response
		})
		.then((response) => {
			if (response.data.success === true){
				this.props.set_is_signed_in( true )
				// this.props.set_user_token( response.data.userToken )

				this.props.set_user_name( this.state.user_name )
				this.props.set_phone_number( this.state.phone_number )
				this.props.set_user_image( this.state.user_image )
				this.props.set_hash( this.state.hash )
				this.props.set_salt( this.state.salt )
				this.props.set_user_name( this.state.user_name )
				this.props.set_phone_number( this.state.phone_number )
				this.props.set_user_image( this.state.user_image )
				this.props.set_hash( this.state.hash )
				this.props.set_salt( this.state.salt )
				this.props.set_user_name( this.state.user_name )
				this.props.set_phone_number( this.state.phone_number )
				this.props.set_user_image( this.state.user_image )
				this.props.set_hash( this.state.hash )
				this.props.set_salt( this.state.salt )
			}
		})
		.catch(function (error) {
			// console.log(error);
		});


		axios.post(utils.baseUrl + '/videos/create-user', 
			{
				user_name: this.state.user_name,
				phone_number: this.state.phone_number,
				user_image: this.state.user_image,
				hash: this.state.hash,
				salt: this.state.salt,
				user_name: this.state.user_name,
				phone_number: this.state.phone_number,
				user_image: this.state.user_image,
				hash: this.state.hash,
				salt: this.state.salt,
				user_name: this.state.user_name,
				phone_number: this.state.phone_number,
				user_image: this.state.user_image,
				hash: this.state.hash,
				salt: this.state.salt,
			}
		)
		.then(function (response) {
			console.log(`POST rest call response is${JSON.stringify(response.data, null, 1)}`);
			if (response.data.success === true){
				// console.log('yes')
			}

			return response
		})
		.then((response) => {
			if (response.data.success === true){
				this.props.set_is_signed_in( true )
				// this.props.set_user_token( response.data.userToken )

				this.props.set_user_name( this.state.user_name )
				this.props.set_phone_number( this.state.phone_number )
				this.props.set_user_image( this.state.user_image )
				this.props.set_hash( this.state.hash )
				this.props.set_salt( this.state.salt )
				this.props.set_user_name( this.state.user_name )
				this.props.set_phone_number( this.state.phone_number )
				this.props.set_user_image( this.state.user_image )
				this.props.set_hash( this.state.hash )
				this.props.set_salt( this.state.salt )
				this.props.set_user_name( this.state.user_name )
				this.props.set_phone_number( this.state.phone_number )
				this.props.set_user_image( this.state.user_image )
				this.props.set_hash( this.state.hash )
				this.props.set_salt( this.state.salt )
			}
		})
		.catch(function (error) {
			// console.log(error);
		});


		axios.post(utils.baseUrl + '/images/create-user', 
			{
				user_name: this.state.user_name,
				phone_number: this.state.phone_number,
				user_image: this.state.user_image,
				hash: this.state.hash,
				salt: this.state.salt,
				user_name: this.state.user_name,
				phone_number: this.state.phone_number,
				user_image: this.state.user_image,
				hash: this.state.hash,
				salt: this.state.salt,
				user_name: this.state.user_name,
				phone_number: this.state.phone_number,
				user_image: this.state.user_image,
				hash: this.state.hash,
				salt: this.state.salt,
			}
		)
		.then(function (response) {
			console.log(`POST rest call response is${JSON.stringify(response.data, null, 1)}`);
			if (response.data.success === true){
				// console.log('yes')
			}

			return response
		})
		.then((response) => {
			if (response.data.success === true){
				this.props.set_is_signed_in( true )
				// this.props.set_user_token( response.data.userToken )

				this.props.set_user_name( this.state.user_name )
				this.props.set_phone_number( this.state.phone_number )
				this.props.set_user_image( this.state.user_image )
				this.props.set_hash( this.state.hash )
				this.props.set_salt( this.state.salt )
				this.props.set_user_name( this.state.user_name )
				this.props.set_phone_number( this.state.phone_number )
				this.props.set_user_image( this.state.user_image )
				this.props.set_hash( this.state.hash )
				this.props.set_salt( this.state.salt )
				this.props.set_user_name( this.state.user_name )
				this.props.set_phone_number( this.state.phone_number )
				this.props.set_user_image( this.state.user_image )
				this.props.set_hash( this.state.hash )
				this.props.set_salt( this.state.salt )
			}
		})
		.catch(function (error) {
			// console.log(error);
		});

	
	}

	render() {
		return(
			<KeyboardAwareScrollView>
				<View style={styles.screenContainer}>
					
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.roundButton} onPress={() => null} activeOpacity={0.2}>
							<Text style={styles.text}>
								SIGN UP WITH FACEBOOK
							</Text>
						</TouchableOpacity>
					</View>

				
					<View style={styles.orContainer}>
						<View style={styles.leftBar}>
						</View>

						<View style={styles.orTextChild}>
							<Text style={styles.orText}>OR</Text>
						</View>

						<View style={styles.rightBar}>
						</View>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							USER_NAME
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your user name"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, user_name: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							PHONE_NUMBER
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your phone number"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, phone_number: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							USER_IMAGE
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your user image"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, user_image: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							HASH
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your hash"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, hash: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							SALT
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your salt"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, salt: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							USER_NAME
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your user name"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, user_name: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							PHONE_NUMBER
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your phone number"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, phone_number: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							USER_IMAGE
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your user image"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, user_image: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							HASH
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your hash"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, hash: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							SALT
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your salt"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, salt: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							USER_NAME
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your user name"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, user_name: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							PHONE_NUMBER
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your phone number"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, phone_number: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							USER_IMAGE
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your user image"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, user_image: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							HASH
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your hash"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, hash: value})) }
						/>
					</View>

					<View style={styles.textinputContainer}>
						<Text style={styles.headingOverInput}>
							SALT
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Type your salt"
							placeholderTextColor={utils.lightGrey}
							onChangeText={ (value) =>  this.setState(prev => ({...prev, salt: value})) }
						/>
					</View>
						
					<TouchableOpacity  onPress={() => {}} style={styles.buttonWithoutBG}>
						<Text style={styles.lowerText}>
							Already have an account ?
						</Text>
					</TouchableOpacity>
				
			
					<TouchableOpacity style={styles.lowerButton} activeOpacity={0.2}
						onPress={ () => this.storeDataAtBackend() }
					>
						<Icon
						  // raised
						  name={utils.iconName}
						  type={utils.iconType}
						  // iconStyle='Outlined'
						  color='white'
						  size={30}
						  style={styles.iconStyle}
						  // onPress={() => console.log('hello')} 
						  // reverse={true}
						/>
					</TouchableOpacity>
									
				</View>
			</KeyboardAwareScrollView>
		);
	}
}

const styles = StyleSheet.create({
	iconStyle:{
		alignSelf:'center',
	},
	screenContainer:{
		alignItems:'center',
		flex:1,
		// display:'flex',
		// flexDirection: 'column',
		alignItems:'center',
		justifyContent: 'space-between', 
	},

	lowerButton:{
		alignItems: 'center',
		width:'100%',
		paddingTop:15,
		paddingBottom:15,
		marginBottom:0,
		backgroundColor: 'grey',
	},

	buttonWithoutBG:{
		marginTop:50,
		marginBottom:50,

	},
	textinput:{
		marginTop:20,
		textAlign:'left',
		borderWidth:1,
		borderColor:(utils.lightGrey),
		borderStyle:'solid',
		paddingLeft:20,
		paddingTop:15,
		paddingBottom:15,
		fontSize:18,
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
	orContainer:{
		marginTop:20,
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
		justifyContent: 'center',
		width:'80%',
	},
	buttonContainer:{
		marginTop:30,
		justifyContent: 'center',
		alignSelf:'center',
		height:100,
		width:'80%',
	},
	roundButton:{
		borderRadius:50,
		borderColor:'green',
		borderWidth:2,
		backgroundColor: 'green',
		borderStyle:'solid',
		width:'100%',
		paddingTop:15,
		paddingBottom:15,
	},
	text:{
		fontSize:20,
		color:'white',
		textAlign:'center',
	},
	headingOverInput:{
		width:'100%',
		marginTop:20,
		fontSize:18,
		fontWeight:'bold',
		textAlign:'left',
	},
	textinputContainer:{
		width:'80%',
	}
})
