import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	FlatList,
	SafeAreaView,
	ScrollView,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';

import utils from "../utilities";

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {
} from "../components/products/"

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
	ConnectedProductCard,
	ConnectedCreateProduct,
} from '../redux_stuff/connected_components';

class ProductScreen extends Component {
	constructor(props) {
		super(props);

// STATE	
		this.state = {
			get_individual_image:false,
			numColumns:1,
			isCategoryInstead:false,
			isCard:false,

			get_individual_image:false,
		}

	}

	getCategories(){
		axios.get(utils.baseUrl + '/products/products-categories',)
		.then((response) => {
			if (response.data.success){

				// console.log('PRODUCT CATEGORIES FETCHED')
				// console.log(response.data)
				this.props.set_product_categories(response.data.categories)
			} else {
				console.log('COULDNT FETCH CATEGORIES')
				this.props.set_product_categories([])
			}
		})
		.catch((error) => {
			console.log(error);
		})		
	}

	getProducts(){

		let redirectToSignIn = () => this.props.navigation.navigate('SignInStack', { screen: 'Login' })
		let setIsSignedInCallback = () => this.props.set_is_signed_in( false )
		let setPhoneNumberCallback = () => this.props.set_phone_number( null )

		let category = this.props.route.params.product_category_name

		axios.get(utils.baseUrl + '/products/get-products-of-category', 
			{
				params:{
					category: category,
				}
			}
		)
		.then((response) => {
	    	if (response.status === 401){
				setIsSignedInCallback()
				setPhoneNumberCallback()
				redirectToSignIn()
	    	}

			if (response.data.success){

				this.props.set_fetched_products(response.data.products_list)					
		    	this.setState({ get_individual_image: true })

			} else {
				console.log('COULDNT FETCH PRODUCTS')
				this.props.set_fetched_products([])
			}
		})
		.catch((error) => {
			console.log(error);
			this.props.set_fetched_products([])

			// using below condition since log spits below line with 401 status code
			if (String(error).split(" ").join("") === 'Error: Request failed with status code 401'.split(" ").join("")){

				setIsSignedInCallback()
				setPhoneNumberCallback()
				redirectToSignIn()

			}

		})

	}

	componentDidMount() {
		this._unsubscribeFocus = this.props.navigation.addListener('focus', () => {
			// below will be executed when user enters this screen
			console.log('screen_payload')
			console.log(this.state.screen_payload)

			this.setUpScreen()
			// const payload_from_previous_screen = this.props.navigation
			// let { id } = payload_from_previous_screen
		});

		this._unsubscribeBlur = this.props.navigation.addListener('blur', () => {
			// below will be executed when user leaves this screen
			console.log('I AM UNMOUNTED')
			console.log('I AM UNMOUNTED')
			console.log('I AM UNMOUNTED')

			// const payload_from_previous_screen = this.props.navigation
			// let { id } = payload_from_previous_screen
		});

	}

	componentWillUnmount() {
		this._unsubscribeFocus();
		this._unsubscribeBlur();
	}


	setUpScreen(){


		let payload_from_previous_screen = this.props.route.params
		console.log('payload_from_previous_screen')
		console.log(payload_from_previous_screen)

		if (typeof payload_from_previous_screen !== 'undefined'){

			if (payload_from_previous_screen.product_category_name){

				console.log('USING SCREEN FOR FETCHING PRODUCTS')
				this.props.navigation.setOptions({title: 'Products',})
				this.setState(prev => ({...prev, 
					showProducts: true, 
					showProductCategories:false,
					numColumns: 2, 
					isCategoryInstead:false,
					isCard:true,
				}))
				this.getProducts()

			} else {

				console.log('USING SCREEN FOR FETCHING CATEGORIES')
				this.props.navigation.setOptions({title: 'Product Categories',})
				this.setState(prev => ({...prev, 
					showProductCategories: true, 
					showProducts:false,
					numColumns: 1, 
					isCategoryInstead:true,
					isCard:false,
				}))
				this.getCategories()

			}

		} else {

			console.log('USING SCREEN FOR FETCHING CATEGORIES')
			this.props.navigation.setOptions({title: 'Product Categories',})
			this.setState(prev => ({...prev, 
				showProductCategories: true, 
				showProducts:false,
				numColumns: 1, 
				isCategoryInstead:true,
				isCard:false, 
			}))
			this.getCategories()

		}

	
	}



// RENDER METHOD
	render() {

		let data_to_use = []
		if (this.state.showProductCategories){

			data_to_use = this.props.total_categories
		
		} else if (this.state.showProducts){

			data_to_use = this.props.total_products

		} else {

			data_to_use = this.props.total_categories

		}

			


		return (
			<KeyboardAwareScrollView>
				
				<SafeAreaView>
					<ScrollView contentContainerStyle={styles.screenContainer}>

						{this.state.numColumns === 1 && (

							<FlatList
								style={{flexDirection: 'column', flexWrap : "wrap"}}
								numColumns={1}
								data={data_to_use}
								renderItem={
								({ item }) => {
									// console.log('data_to_use')
									// console.log(data_to_use)
									return(
										<ConnectedProductCard
											navigation={this.props.navigation}
											getIndividualImage = {this.state.get_individual_image}
											
											// isProductShapeCard={true}
											isCategoryInstead={this.state.isCategoryInstead}
											isCard={this.state.isCard}
											dataPayloadFromParent = { item }
											// showCompleteProductCallback = {  }
											addToCartCallback = { () => this.props.add_product_to_cart(item.id) }
											removeFromCartCallback = { () => this.props.remove_product_from_cart(item.id) }		
										/>
									)
								}}
								keyExtractor={(item, index) => String(index)}
							/>

						)}


						{this.state.numColumns === 2 && (

							<FlatList
								style={{flexDirection: 'column', flexWrap : "wrap"}}
								numColumns={2}
								data={data_to_use}
								renderItem={
								({ item }) => {
									// console.log('data_to_use')
									// console.log(data_to_use)
									return(
										<ConnectedProductCard
											navigation={this.props.navigation}
											getIndividualImage = {this.state.get_individual_image}
											
											// isProductShapeCard={true}
											isCategoryInstead={this.state.isCategoryInstead}
											isCard={this.state.isCard}
											dataPayloadFromParent = { item }
											// showCompleteProductCallback = {  }
											addToCartCallback = { () => this.props.add_product_to_cart(item.id) }
											removeFromCartCallback = { () => this.props.remove_product_from_cart(item.id) }		
										/>
									)
								}}
								keyExtractor={(item, index) => String(index)}
							/>

						)}




						<View style={{marginTop:10}}>
				  			<ConnectedCreateProduct
								navigation={ this.props.navigation }
				  			/>
				  		</View>

					
					</ScrollView>
				</SafeAreaView>

			</KeyboardAwareScrollView>
		);
	}
}

ProductScreen.defaultProps = {
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

	},


	screenContainer:{
		// flex:1,
		// display:'flex',
		alignItems: 'center', // horizontally centered
		justifyContent: 'space-between', 
	},
	somethingContainer:{
		marginTop: windowHeight * 0.05, // or 30  gap
		height: windowHeight * 0.1, // or 100
		width: '80%',
		justifyContent: 'center', // vertically centered
		alignSelf: 'center', // horizontally centered
		// backgroundColor: utils.lightGreen,
	},

});

export default ProductScreen