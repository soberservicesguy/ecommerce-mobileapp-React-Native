import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	TextInput,
	TouchableOpacity,
	Button,
} from "react-native";
import PropTypes from 'prop-types';
					
import axios from 'axios';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import utils from "../../utilities";

import { Consumer } from "../../screens/blog_post"

import DocumentPicker from 'react-native-document-picker';

class CreateProduct extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			expanded:false,
			category:'',
			image_thumbnail_filepath: '',
			title: '',
			price: '',
			product_size: '',
			product_color: '',
		}

	}


// COMPONENT DID MOUNT
	componentDidMount() {

	}

	render() {

		return (
		// e.g a social post, textinput which lets user to enter text, takes persons id as assigned object
			<View style={styles.outerContainer}>

				<Button 
					title={'Select Product image'}
					onPress={async () => {
						try {
							let res = await DocumentPicker.pick({
								type: [
									DocumentPicker.types.images,
								],
							});
							console.log(res.uri, res.type, res.name, res.size); // res.type is mimeType
							// setState method with response as argument
							this.setState(prev => ({...prev, image_thumbnail_filepath: res}))

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


				<View style={{
					display: 'flex',
					flexDirection: 'row',
				}}>
				  	<View style={styles.textinputContainer}>
						<TextInput
							style={styles.textinput}
							placeholder="Type title"
							placeholderTextColor = {utils.lightGrey}
							// maxLength=10
							// caretHidden=true
							// multiline=true
							// numberOfLines=3
							// onChangeText={ () => null }
							// value='dummy'
							// autoFocus=true
							onChangeText={ (value) => this.setState( prev => ({...prev, title: value})) }
						/>
				  	</View>

				  	<View style={styles.textinputContainer}>
						<TextInput
							style={styles.textinput}
							placeholder="Type category"
							placeholderTextColor = {utils.lightGrey}
							// maxLength=10
							// caretHidden=true
							// multiline=true
							// numberOfLines=3
							// onChangeText={ () => null }
							// value='dummy'
							// autoFocus=true
							onChangeText={ (value) => this.setState( prev => ({...prev, category: value})) }
						/>
				  	</View>						
				</View>

				<View style={{
					display: 'flex',
					flexDirection: 'row',
				}}>
				  	<View style={styles.textinputContainer}>
						<TextInput
							style={styles.textinput}
							placeholder="Type price"
							placeholderTextColor = {utils.lightGrey}
							// maxLength=10
							// caretHidden=true
							// multiline=true
							// numberOfLines=3
							// onChangeText={ () => null }
							// value='dummy'
							// autoFocus=true
							onChangeText={ (value) => this.setState( prev => ({...prev, price: value})) }
						/>
				  	</View>


				  	<View style={styles.textinputContainer}>
						<TextInput
							style={styles.textinput}
							placeholder="Type product_size"
							placeholderTextColor = {utils.lightGrey}
							// maxLength=10
							// caretHidden=true
							// multiline=true
							// numberOfLines=3
							// onChangeText={ () => null }
							// value='dummy'
							// autoFocus=true
							onChangeText={ (value) => this.setState( prev => ({...prev, product_size: value})) }
						/>
				  	</View>
				</View>

			  	<View style={styles.textinputContainer}>
					<TextInput
						style={styles.textinput}
						placeholder="Type product_color"
						placeholderTextColor = {utils.lightGrey}
						// maxLength=10
						// caretHidden=true
						// multiline=true
						// numberOfLines=3
						// onChangeText={ () => null }
						// value='dummy'
						// autoFocus=true
						onChangeText={ (value) => this.setState( prev => ({...prev, product_color: value})) }
					/>
			  	</View>

				<TouchableOpacity
					activeOpacity={0.2}
					style={styles.bottomButton}
					onPress={ () => {

						let setResponseInCurrentProduct = (arg) => this.props.set_current_product(arg)
						let redirectToNewProduct = () => {this.props.navigation.navigate('Individual_Product')}

						let redirectToSignIn = () => this.props.navigation.navigate('SignInStack', { screen: 'Login' })
						let setIsSignedInCallback = () => this.props.set_is_signed_in( false )
						let setPhoneNumberCallback = () => this.props.set_phone_number( null )

						const formData = new FormData()
						formData.append('title', this.state.title)
						formData.append('category', this.state.category)
						formData.append('price', this.state.price)
						formData.append('product_size', this.state.product_size)
						formData.append('product_color', this.state.product_color)
						formData.append('product_image', {uri: this.state.image_thumbnail_filepath.uri, type: this.state.image_thumbnail_filepath.type, name: this.state.image_thumbnail_filepath.name})

						axios.post(utils.baseUrl + '/products/create-product-with-user', formData)
						.then(function (response) {
							console.log(response.data) // current product screen data
					    	if (response.status === 401){
								setIsSignedInCallback()
								setPhoneNumberCallback()
								redirectToSignIn()
					    	}
							
							// set to current parent object
							setResponseInCurrentProduct(response.data.new_product)

							// change route to current_product
							redirectToNewProduct()

						})
						.catch(function (error) {
							console.log(error)

							// using below condition since log spits below line with 401 status code
							if (String(error).split(" ").join("") === 'Error: Request failed with status code 401'.split(" ").join("")){

								setIsSignedInCallback()
								setPhoneNumberCallback()
								redirectToSignIn()

							}
						});						

					}}
				>
					<Text style={styles.buttonText}>
						Press to create product
					</Text>
				</TouchableOpacity>
			</View>
		);			
	}
}
	
CreateProduct.defaultProps = {

};

const styles = StyleSheet.create({
	outerContainer: {
		alignItems:'center',
		// flex:1,
		// display:'flex',
		// flexDirection: 'column',
		alignItems:'center',
		justifyContent: 'space-between', 
		backgroundColor: '#ffffff',
		width: windowWidth
	},

// textinput
	textinputContainer:{
		marginTop: windowHeight * 0.001, // or 30  gap
		marginBottom: windowHeight * 0.001, // or 30  gap
		height: windowHeight * 0.1, // or 100
		width: windowWidth * 0.45,
		justifyContent: 'center', // vertically centered
		alignSelf: 'center', // horizontally centered
		// backgroundColor: utils.lightGreen,
	},
	textinput:{
		marginTop:20,
		textAlign:'center',
		borderWidth:1,
		borderColor:(utils.lightGrey),
		borderStyle:'solid',
		paddingLeft:20,
		paddingTop:15,
		paddingBottom:15,
		fontSize:18,
	},

	// create product button
	bottomButton:{
		marginTop: windowHeight * 0.03,
		width: windowWidth,
		height: windowHeight * 0.08,
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor: utils.lightGreen,
	},
	buttonText:{
		color:'white',
		fontSize:20,
		fontWeight: 'bold',
	}
});

export default CreateProduct