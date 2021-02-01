import React, { Component } from 'react';
import {
	SafeAreaView,
	ScrollView,
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	TextInput,
	TouchableHighlight
} from 'react-native';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
				<View style={styles.container} >
	        
	        <View style={{height: 40}} ></View>
					
						<TouchableOpacity
						  // style={styles.roundBorderButton}
						  activeOpacity={0.2}
						  onPress={() => null }
						>
						  <View style={styles.roundedButton} >
						    <Text style={styles.textForRoundButton} >
						      LOGIN WITH FACEBOOK
						    </Text>
						  </View>
						</TouchableOpacity>

	        <View style={{height: 30}} ></View>

					<View>
						<Text style={{
							fontSize: 20,
							color:'#e2e4e8'
						}} >
							--------------------- OR ---------------------  
						</Text>
					</View>

	        <View style={{height: 30}} ></View>

		      <View	style={styles.leftAlignedContainer} >
	        	<Text style={{
							fontSize: 15,
							fontWeight: 'bold', 
							color:'#000000',
	        	}} >
	        		EMAIL ADRESS
	        	</Text>

		        <View style={{height: 15}} ></View>

	        	<TextInput
	        		style={styles.textInput}
	        		placeholder="Type your email address"
	        		placeholderTextColor = "#e2e4e8"
	        		// maxLength=10
	        		// caretHidden=true
	        		// multiline=true
	        		// numberOfLines=3
	        		// onChangeText={ () => null }
	        		// value='dummy'
	        		// autoFocus=true
	        	/>

		        <View style={{height: 15}} ></View>

	        	<Text style={{
							fontSize: 15,
							fontWeight: 'bold', 
							color:'#000000',
	        	}} >
	        		PASSWORD
	        	</Text>

		        <View style={{height: 15}} ></View>

	        	<TextInput
	        		style={styles.textInput}
	        		placeholder="Type your password"
	        		placeholderTextColor = "#e2e4e8"
	        		// maxLength=10
	        		// caretHidden=true
	        		// multiline=true
	        		// numberOfLines=3
	        		// onChangeText={ () => null }
	        		// value='dummy'
	        		// autoFocus=true
	        	/>

		        <View style={{height: 15}} ></View>


		        <TouchableHighlight
		          style={styles.alreadyHaveAccount}
		          onPress={() => null }
		          activeOpacity={0.85}
		          underlayColor='white'
		        >
		          <View 
			          style={{
			          	backgroundColor: '#000000',
			          	width:'100%'
			          }}
		           >
		            <Text style={{
		            	color:'#e2e4e8',
		            	fontSize: 20,
		            	textAlign:'center'
		            }}>
		              Forgot your password?
		            </Text>
		          </View>
		        </TouchableHighlight>
		      </View>
				</View>
				

		);
	}
}

const styles = StyleSheet.create({
	container:{
		width: '100%',
		height: '100%',
		// justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff'
	},

	textForRoundButton:{
	  color: '#ffffff'
	},

	leftAlignedContainer:{
		width: '75%',
		height: '100%',
		// justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: '#ffffff'
	},

	textInput:{
		width:'100%',
		fontSize: 20,
		paddingLeft: 20,
		borderWidth: 1,
		borderColor: '#e2e4e8'
	},

	roundedButton:{
	  backgroundColor:'#1e5186',
	
	  borderColor: '#1e5186',
	  borderRadius: 25,
	  borderWidth: 1,
	  borderStyle: 'solid',
	
	  // borderLeftRadius: 10,
	  // borderLeftWidth: 1,
	
	  // borderRigthRadius: 10,
	  // borderRigthWidth: 1,
	
	  // borderTopRadius: 10,
	  // borderTopWidth: 1,
	
	  // borderBottomRadius: 10,
	  // borderBottomWidth: 1,
	
	  justifyContent: 'center', 
	  alignItems: 'center',

	  width: '80%',
	  height: 40,
	  paddingHorizontal: 60
	},

	bgImage:{
	  resizeMode: "stretch",
	  height: '100%',
	  width: '100%',

	  // opacity:
	  // tintColor: 1
	  // overlayColor:

	  // backgroundColor: ,

	  // borderColor: ,
	  // borderWidth: 2,
	  // borderRadius: 20,
	  // borderTopLeftRadius: 20,
	  // borderTopRightRadius: 20,
	  // borderBottomLeftRadius: 20,
	  // borderBottomRightRadius: 20,

	},

});