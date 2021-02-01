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


// import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = loadStripe('pk_test_51I98eiADpqLOsbfMg7Sqh5TvQFPRvifh1U1za4bv3wDhEwbQdShvbzQ37NNLfd8sAENcd845FPSUjYZatN9dHHf700QcVrGvdq');


class CreateOrder extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			switchScreen: false,

			cvv:'',
			card_expiry:'',
			card_number:'',
			address:'',
			city:'',
			country:'',
			zip:'',

		}

	}


// COMPONENT DID MOUNT
	componentDidMount() {

	}

	render() {

		// parameters being passed from previous route
		// const endpoint_params_passed = this.props.match.params

		if ( this.state.switchScreen !== false ){

			// switching it back to false
			this.setState(prev => ({...prev, switchScreen: (prev.switchScreen === false) ? true : false }))

			// redirecting
			this.props.navigation.navigate('Individual-Order', {
				itemId: 86,
				otherParam: 'anything you want here',
			})

		} else {

			return (
				<View style={styles.outerContainer}>

					<View style={styles.fieldsContainer}>
						
						<View style={styles.textinputContainer}>
							<Text style={styles.headingOverInputs}>
								CVV
							</Text>

							<TextInput
								style={styles.textinput}
								placeholder="303"
								placeholderTextColor = {utils.lightGrey}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) =>  this.setState(prev => ({...prev, cvv: value})) }
							/>
						</View>

						<View style={styles.textinputContainer}>
							<Text style={styles.headingOverInputs}>
								EXP DATE
							</Text>
							<TextInput
								style={styles.textinput}
								placeholder="16 / 22"
								placeholderTextColor = {utils.lightGrey}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) =>  this.setState(prev => ({...prev, card_expiry: value})) }
							/>
						</View>

					</View>

					<View style={styles.fieldsContainer}>
					  	<View style={styles.textinputContainer}>
							<Text style={styles.headingOverInputs}>
								CARD NUMBER
							</Text>
							<TextInput
								style={styles.textinput}
								placeholder="5839 9594 3003 3493"
								placeholderTextColor = {utils.lightGrey}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) => this.setState( prev => ({...prev, card_number: value})) }
							/>
					  	</View>
					</View>


					<View style={styles.fieldsContainer}>
					  	<View style={styles.textinputContainer}>
							<Text style={styles.headingOverInputs}>
								ADRESS
							</Text>							
							<TextInput
								style={styles.textinput}
								placeholder="Seifert 197/05"
								placeholderTextColor = {utils.lightGrey}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) => this.setState( prev => ({...prev, address: value})) }
							/>
					  	</View>

					  	<View style={styles.textinputContainer}>
							<Text style={styles.headingOverInputs}>
								CITY
							</Text>
							<TextInput
								style={styles.textinput}
								placeholder="Karachi"
								placeholderTextColor = {utils.lightGrey}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) => this.setState( prev => ({...prev, city: value})) }
							/>
					  	</View>

					</View>

					<View style={styles.fieldsContainer}>
					  	<View style={styles.textinputContainer}>
							<Text style={styles.headingOverInputs}>
								COUNTRY
							</Text>							
							<TextInput
								style={styles.textinput}
								placeholder="Pakistan"
								placeholderTextColor = {utils.lightGrey}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) => this.setState( prev => ({...prev, country: value})) }
							/>
					  	</View>


					  	<View style={styles.textinputContainer}>
							<Text style={styles.headingOverInputs}>
								ZIP
							</Text>
							<TextInput
								style={styles.textinput}
								placeholder="120 00"
								placeholderTextColor = {utils.lightGrey}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) => this.setState( prev => ({...prev, zip: value})) }
							/>
					  	</View>

					</View>

					
					<View style={styles.bottomButtonsContainer}>

						<TouchableOpacity 
							activeOpacity={0.2} 
							style={styles.paypalButton}
							onPress={ () => {

								let setResponseInCurrentOrder = (arg) => this.props.set_current_order(arg)
								let redirectToNewOrder = () => this.setState(prev => ({...prev, switchScreen: (prev.switchScreen === false) ? true : false }))	

								// removing unncessary keys like id, image_thumbnail_filepath from payload
								var final_products_paylaod = this.props.complete_cart.map((product) => {

									delete product.id
									delete product.image_thumbnail_filepath

									return product
								})

								axios.post(utils.baseUrl + '/paypal/create-order-with-paypal', 
									{
										products: final_products_paylaod,
										phone_number: this.state.order_phone_number_field,
										delivery_address: this.state.order_delivery_address_field,
									}
								)
								.then(function (res) {
								
									if (res.status === 200) {

										console.log('GOING TO PAYPAL URL FOR PAYMENT VERIFICATION')
										console.log(res.data)
										window.location = res.data.forwardLink

									} else {
										console.log('SOMETHING IS WRONG')
									}

								})
								.catch(function (error) {
									console.log(error)
								});						

							}}
						>
							<Text style={styles.innerText}>
								Create Order With Paypal
							</Text>
						</TouchableOpacity>
						
						<TouchableOpacity 
							activeOpacity={0.2} 
							style={styles.stripeButton}
							onPress={ () => {

								let setResponseInCurrentOrder = (arg) => this.props.set_current_order(arg)
								let redirectToNewOrder = () => this.setState(prev => ({...prev, switchScreen: (prev.switchScreen === false) ? true : false }))	

								// removing unncessary keys like id, image_thumbnail_filepath from payload
								var final_products_paylaod = this.props.complete_cart.map((product) => {

									delete product.id
									delete product.image_thumbnail_filepath

									return product
								})

								axios.post(utils.baseUrl + '/paypal/create-order-with-stripe', 
									{
										products: final_products_paylaod,
										phone_number: this.state.order_phone_number_field,
										delivery_address: this.state.order_delivery_address_field,
										// order_email: this.state.order_email,
									}
								)
								.then(async function (res) {
								
									const stripe = await stripePromise;
									const session = await res.json();
									const result = await stripe.redirectToCheckout({
										sessionId: session.id,
								    });

								// OLD STRIPE WORKFLOW
									// const clientSecret = res.data['client_secret'];
									// const result = await stripe.confirmCardPayment(clientSecret, {
									// 	payment_method: {
									// 		card: elements.getElement(CardElement),
									// 		billing_details: {
									// 			email: email,
									// 		},
									// 	},
									// });
								// PAYPAL WORKFLOW
									// if (res.status === 200) {

									// 	console.log('GOING TO PAYPAL URL FOR PAYMENT VERIFICATION')
									// 	console.log(res.data)
									// 	window.location = res.data.forwardLink

									// } else {
									// 	console.log('SOMETHING IS WRONG')
									// }
								})
								.catch(function (error) {
									console.log(error)
								});						

							}}
						>
							<Text style={styles.innerText}>
								Create Order With Stripe
							</Text>
						</TouchableOpacity>
					</View>

				</View>
			);
		}			
	}
}
	
CreateOrder.defaultProps = {

};

const styles = StyleSheet.create({
	outerContainer:{
		flex:1,
		alignItems:'center',
		justifyContent: 'space-between', 
		backgroundColor: '#ffffff',
	},

// text inputs
	textinputContainer:{	
		flex: 1,
		height: windowHeight * 0.1
	},
	fieldsContainer:{
		display: 'flex',
		flexDirection: 'row',
		width:'80%',
		justifyContent: 'center',
		alignItems:'center',
		alignSelf: 'center', 
	},
	headingOverInputs:{
		// backgroundColor: '#000000',
		marginTop: windowHeight * 0.01,
		marginBottom: windowHeight * 0.01,
		textAlign:'center',
		// width: '80%',
		fontSize: 16,
		fontWeight: 'bold',
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

// bottom button
	paypalButton:{
		marginTop: windowHeight * 0.01,
		height: windowHeight * 0.1,
		justifyContent: 'center',
		alignSelf:'center',
		width:windowWidth,
		backgroundColor: utils.lightGreen,
	},
	stripeButton:{
		// marginTop: windowHeight * 0.01,
		alignSelf:'center',
		height: windowHeight * 0.1,
		justifyContent: 'center',
		alignSelf:'center',
		width:windowWidth,
		backgroundColor: utils.darkBlue,
	},
	innerText:{
		// fontWeight: 'bold',
		textAlign:'center',
		color:'white',
		fontSize:20
	},
});

export default CreateOrder