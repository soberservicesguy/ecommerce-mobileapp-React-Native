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


class SignUpOrLoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount(){

	}


	render() {
		return(

			<ImageBackground source={utils.firstScreenBG} style={styles.bgImage}>

				<View style={styles.buttonContainer}>
					<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.navigate('SignUp')} style={styles.roundButton}>
						<Text style={styles.innerText}>
							CREATE AN ACCOUNT
						</Text>
					</TouchableOpacity>
				</View>

			
				<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.navigate('Login')} style={styles.buttonWithoutBG}>
					<Text style={styles.forGotPasswordText}>
						Already have an account ?
					</Text>
				</TouchableOpacity>

			</ImageBackground>
				

		);

	}
}


const styles = StyleSheet.create({
	bgImage:{
		alignItems:'center',
		flex:1,
		// display:'flex',
		// flexDirection: 'column',
		alignItems:'center',
		justifyContent: 'space-between', 
		backgroundColor: '#ffffff',
		resizeMode:'contain',
		// resizeMode: "contain / center / cover / stretch / repeat",
		height: windowHeight,
		width: windowWidth,
	},


// roundbutotn
	buttonContainer:{
		marginTop: windowHeight * 0.7,
		justifyContent: 'center',
		alignSelf:'center',
		height:100,
		width:'80%',
	},
	roundButton:{
		borderRadius:50,
		borderColor:utils.lightGreen,
		borderWidth:2,
		backgroundColor: utils.lightGreen,
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

// already have an account button
	buttonWithoutBG:{
		textAlign: 'center', 
		marginTop:windowHeight * 0.02,
		marginBottom:windowHeight * 0.1,
	},
	forGotPasswordText:{
		color: utils.lightGrey,
		fontSize: 20,
	},

})

export default SignUpOrLoginScreen