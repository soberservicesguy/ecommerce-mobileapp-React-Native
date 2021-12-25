import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	FlatList,
	TouchableOpacity,
	TextInput,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';

import utils from "../utilities"

// IMPORT CONNECTED COMPONENTS
import {
	ConnectedComponentForShowingCart,
} from '../redux_stuff/connected_components';

// const { Provider, Consumer } = React.createContext();

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { requestOneTimePayment } from 'react-native-paypal'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { WebView } from 'react-native-webview';

// import {Bar} as Progress from 'react-native-progress';



class CartScreen extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			order_phone_number_field: null,
			order_delivery_address_field: null,

			paypal_payment_url:null,
			showPaypalWebview: false,
			status: null,
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
	}


	getCompleteObjectAndSwitchToItsContainer(endpoint) {
		axios.get(utils.baseUrl + '/products/find-product',
			{params: {endpoint: endpoint } }
		)
		.then((response) => {
			this.props.set_current_item_in_cart( response.data )

			this.setState(prev => ({...prev, switchScreen: (prev.switchScreen === false) ? true : false }))
			this.props.navigation.navigate('Individual-Cart-Item', {
				itemId: 86,
				otherParam: 'anything you want here',
			})

		})
		.catch((error) => {
			console.log(error);
		})	
	}

	handleWebviewResponse = data => {

		// checking title of webpage returned from server
		if (data.title === "success") {

			this.setState(prev => ({...prev, showPaypalWebview: false, status: "Complete"}))

		} else if (data.title === "cancel") {

			this.setState(prev => ({...prev, showPaypalWebview: false, status: "Cancelled"}))

		} else {

			return;

		}
	};

// RENDER METHOD
	render() {
			
		const cart = this.props.complete_cart

		// parameters being passed from previous route
		// const endpoint_params_passed = this.props.match.params

		// let progress_bar = (
		// 	<Bar
		// 		progress={progress}
		// 		width={null}
		// 		borderWidth={0}
		// 		borderRadius={0}
		// 		color='#ff8300'
		// 	/>
		// )

		if (this.state.showPaypalWebview){

			return (
				
				<WebView
					source={{ uri: this.state.paypal_payment_url }}
					onNavigationStateChange={data => this.handleWebviewResponse(data)}
					onError={(event) => {
						alert(`Webview error: ${event.nativeEvent.description}`)
						console.log(`Webview error: ${event.nativeEvent.description}`)
						this.setState(prev => ({...prev, showPaypalWebview: false}))
					}}
					onMessage={(event) => alert(event.nativeEvent.data)}
				/>
			)

		} else {

			return (

				<KeyboardAwareScrollView>

					<View style={{
						height: windowHeight * 0.62, 
					}}>
						
			  	  		<FlatList
			  				style={{
			  					flexDirection: 'column', 
				  				// flexWrap : "wrap",
				  			}}
			  				numColumns={1}
			  	  			// data={cart}
			  	  			data={this.props.complete_cart}
			  				renderItem={
			  					({ item }) => (
									<View>
										<ConnectedComponentForShowingCart
											dataPayloadFromParent = { item }
										// not needed, since its redux
											// product_size_modify_callback = { (product_size) => this.props.modify_product_size_of_some_item_in_cart(item.id, product_size) }
											// initial_quantity_modify_callback = { (initial_quantity) => this.props.modify_initial_quantity_of_some_item_in_cart(item.id, initial_quantity) }
											// product_color_modify_callback = { (product_color) => this.props.modify_product_color_of_some_item_in_cart(item.id, product_color) }						
											remove_from_cart_callback = { () => this.props.remove_product_from_cart(item.id) }
											
											// toggle_size_modal_callback = { () => this.toggle_product_size_modal() }
											// toggle_quantity_modal_callback = { () => this.toggle_initial_quantity_modal() }
											// toggle_color_modal_callback = { () => this.toggle_product_color_modal() }
										/>
									</View>
			  					)}
			  				keyExtractor={(item, index) => String(index)}
			  			/>

					</View>

					<View style={{alignSelf:'center'}}>
						<View style={styles.textinputContainer}>
							<TextInput
								style={styles.textinput}
								placeholder="Delivery Address"
								placeholderTextColor = {utils.lightGrey}
								// secureTextEntry={true}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) =>  this.setState(prev => ({...prev, order_delivery_address_field: value})) }
							/>
						</View>


						<View style={styles.textinputContainer}>
							<TextInput
								style={styles.textinput}
								placeholder="Phone Number"
								placeholderTextColor = {utils.lightGrey}
								// secureTextEntry={true}
								// maxLength=10
								// caretHidden=true
								// multiline=true
								// numberOfLines=3
								// onChangeText={ () => null }
								// value='dummy'
								// autoFocus=true
								onChangeText={ (value) =>  this.setState(prev => ({...prev, order_phone_number_field: value})) }
							/>
						</View>
					</View>


					<TouchableOpacity activeOpacity={0.2} style={styles.roundButton} onPress={() => {
				
						let setResponseInCurrentOrder = (arg) => this.props.set_current_order(arg)
						let redirectToNewOrder = () => this.setState(prev => ({...prev, redirectToRoute: (prev.redirectToRoute === false) ? true : false }))
						let setIsSignedInCallback = () => this.props.set_is_signed_in( false )
						let setPhoneNumberCallback = () => this.props.set_phone_number( null )
						let redirectToSignIn = () => this.props.navigation.navigate('SignInStack', { screen: 'Login' })


						let setPaymentUrl = (payment_url) => this.setState(prev => ({...prev, paypal_payment_url: payment_url}))
						let showWebView = () => this.setState(prev => ({...prev, showPaypalWebview: true}))


						// removing unncessary keys like id, image_thumbnail_filepath from payload
						var final_products_paylaod = this.props.complete_cart.map((product) => {

							delete product.id
							delete product.image_thumbnail_filepath

							return product
						})

						console.log('using bellow as payload')
						console.log(final_products_paylaod)

						axios.post(utils.baseUrl + '/paypal/create-order-with-paypal', 
							{
								products: final_products_paylaod,
								phone_number: this.state.order_phone_number_field,
								delivery_address: this.state.order_delivery_address_field,
							}
						)
						.then(async function (res) {

					    	if (res.status === 401){
						
								setIsSignedInCallback()
								setPhoneNumberCallback()
								redirectToSignIn()
					   
					    	} else if (res.status === 200) {

								let payment_url = res.data.forwardLink
								setPaymentUrl(payment_url)
								showWebView()
					   //  		console.log(`client token for transaction is ${res.data.client_token}`)

								// const {

								// 	nonce,
								// 	payerId,
								// 	email,
								// 	firstName,
								// 	lastName,
								// 	phone

								// } = await requestOneTimePayment(
								// 	res.data.client_token, // token,
								// 	{
								// 		amount: res.data.total_amount, // required
								// 		// any PayPal supported currency (see here: https://developer.paypal.com/docs/integration/direct/rest/currency-codes/#paypal-account-payments)
								// 		currency: res.data.currency,
								// 		// any PayPal supported locale (see here: https://braintree.github.io/braintree_ios/Classes/BTPayPalRequest.html#/c:objc(cs)BTPayPalRequest(py)localeCode)
								// 		localeCode: 'en_GB', 
								// 		shippingAddressRequired: false,
								// 		userAction: 'commit', // display 'Pay Now' on the PayPal review page
								// 		// one of 'authorize', 'sale', 'order'. defaults to 'authorize'. see details here: https://developer.paypal.com/docs/api/payments/v1/#payment-create-request-body
								// 		intent: 'sale', 
								// 		// intent: 'authorize', 
								// 	}
								// )

								// console.log(
								// 	nonce,
								// 	payerId,
								// 	email,
								// 	firstName,
								// 	lastName,
								// 	phone,
								// )

							} else {
								console.log('SOMETHING IS WRONG')
							}

						})
						.catch(function (error) {
							console.log('caught error while creating blogpost')
							console.log(error)

							// using below condition since log spits below line with 401 status code
							if (String(error).split(" ").join("") === 'Error: Request failed with status code 401'.split(" ").join("")){

								setIsSignedInCallback()
								setPhoneNumberCallback()
								redirectToSignIn()

							}

						});						

					}}>
						<Text style={styles.innerText}>
							Pay With Paypal
						</Text>
					</TouchableOpacity>


				</KeyboardAwareScrollView>
			);
		}
	}
}

CartScreen.defaultProps = {
	// : ,
};

const styles = StyleSheet.create({
	container: {
	},
	bigBlue: {
	},					
	buttonWithoutBG:{
		marginTop:50,
		marginBottom:50,
	},
	innerText:{
		textAlign:'center',
		fontSize: 20,
		color: 'blue',
		alignSelf:'center',
		paddingTop:10,
	},

	textinputContainer:{	
		width: '100%',
		marginTop:5,
	},
	textinput:{
		width: windowWidth * 0.9,
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


});

export default CartScreen