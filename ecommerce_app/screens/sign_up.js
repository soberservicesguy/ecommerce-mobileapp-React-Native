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

import { Picker } from '@react-native-picker/picker';

import DocumentPicker from 'react-native-document-picker';

class SignUpScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {

			user_name: '',
			phone_number: '',
			password:'',
			user_image: '',

			privileges_selected:'',

			switchScreen: false,

		}
	}

	componentDidMount(){

	}


	signup_and_get_privileges(){
		// upload file with axios request
		const formData = new FormData()
		formData.append('user_name', this.state.user_name)
		formData.append('password', this.state.password)
		formData.append('phone_number', this.state.phone_number)
		formData.append('privileges_selected', this.state.privileges_selected)
		formData.append('category', 'avatar')
		formData.append('avatar_image', {uri: this.state.user_image.uri, name: this.state.user_image.name, type: this.state.user_image.type})


		axios.post(utils.baseUrl + '/users/signup-and-get-privileges', formData, {
			onUploadProgress: progressEvent => {
				console.log( 'upload progress: ' + Math.round((progressEvent.loaded / progressEvent.total)*100) + '%' )
			}
		})
		.then(function (response) {
			console.log(`POST rest call response is${JSON.stringify(response.data, null, 1)}`);
			if (response.data.success === true){
				// console.log('yes')
			}

			return response
		})
		.then((response) => {
			if (response.data.success === true){

			// REDIRECT TO LOGIN
				this.props.navigation.navigate('Login')

			} else {
				console.log('user sign up failed, try again')
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

					<View style={{
						display: 'flex',
						flexDirection: 'row',
						width:'80%',
						justifyContent: 'center',
						alignItems:'center', 
					}}>
						
						<View style={styles.textinputContainer}>
							<Text style={styles.headingOverInputs}>
								USER NAME
							</Text>

							<TextInput
								style={styles.textinput}
								placeholder="Set user name"
								placeholderTextColor = {utils.lightGrey}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) =>  this.setState(prev => ({...prev, user_name: value})) }
							/>
						</View>

						<View style={styles.textinputContainer}>
							<Text style={styles.headingOverInputs}>
								PHONE NUMBER
							</Text>
							<TextInput
								style={styles.textinput}
								placeholder="Set phone number"
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

					</View>



					<View style={styles.passwordContainer}>
						<Text style={styles.headingOverInputs}>
							PASSWORD
						</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Set password"
							placeholderTextColor = {utils.lightGrey}
							secureTextEntry={true}
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

					<View>
						<Button 
							title={'Select Avatar'}
							color={utils.lightGrey}
							onPress={async () => {
								try {
									let res = await DocumentPicker.pick({
										type: [
											DocumentPicker.types.images,
										],
									});
									console.log(res.uri, res.type, res.name, res.size); // res.type is mimeType
									// setState method with response as argument
									this.setState(prev => ({...prev, user_image: res}))

								} catch (err) {
									if (DocumentPicker.isCancel(err)) {
										// User cancelled the picker, exit any dialogs or menus and move on
									} else {
										console.log(err)
										// throw err;
									}
								}
							}}
						/>
					</View>

					<View style={{marginTop: 10,}}>
						<Text id="demo-simple-select-outlined-label" style={{fontSize:20}}>
							Select Privileges To Use
						</Text>

						<Picker
							selectedValue={this.state.privileges_selected}
							style={{height: 50, width: 100}}
							onValueChange={(itemValue, itemIndex) => {

								// console logging selected file from menu
								console.log(itemValue) // gives first file
								// setState method with event.target.files[0] as argument
								this.setState(prev => ({...prev, privileges_selected: itemValue}))

							}}
						>
							<Picker.Item label="None" value={null} />
							<Picker.Item label="Basic (surfing and ordering products)" value="Basic" />
							<Picker.Item label="Uploading Products" value="Products control" />
							<Picker.Item label="Uploading Blogposts" value="Blogposts control" />
							<Picker.Item label="All Privileges" value="Total control" />
						</Picker>
					</View>

					<TouchableOpacity activeOpacity={0.2} onPress={() => this.signup_and_get_privileges()} style={styles.bottomButton}>
						<Icon
						  // raised
						  name={utils.righAeroIcon}
						  type='font-awesome'
						  // iconStyle='Outlined'
						  color='#ffffff'
						  size={40}
						/>
					</TouchableOpacity>
				
				</View>
			</KeyboardAwareScrollView>
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
		marginTop: windowHeight * 0.005,
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
		marginTop:windowHeight * 0.01,
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
		marginTop: windowHeight * 0.01,
		marginBottom: windowHeight * 0.01,
		textAlign:'left',
		width: '80%',
		fontSize: 16,
		fontWeight: 'bold',
	},

// text inputs
	textinputContainer:{	
		// width: '80%',
		flex: 1,
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
	passwordContainer:{
		width:'80%',
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

export default SignUpScreen