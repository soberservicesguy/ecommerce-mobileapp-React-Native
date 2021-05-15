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
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

		let redirectToSignIn = () => this.props.navigation.navigate('SignInStack', { screen: 'Login' })
		let setIsSignedInCallback = () => this.props.set_is_signed_in( false )
		let setPhoneNumberCallback = () => this.props.set_phone_number( null )

		axios.get(utils.baseUrl + '/products/products-list',)
		.then((response) => {

	    	if (response.status === 401){
				setIsSignedInCallback()
				setPhoneNumberCallback()
				redirectToSignIn()
	    	}

			if (response.data.success){

				this.props.set_fetched_products(response.data.products_list)
		    	this.setState({ get_individual_image: true })				

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
	get_10_more_items() {
		axios.get(utils.baseUrl + `/products/products-list-next-10-with-children`)
		.then((response) => {
			this.props.set_fetched_10_more_product(response.data)
		})
		.catch((error) => {
			console.log(error);
		})		
	}

// RENDER METHOD
	render() {
			
		const total_products = this.props.total_products

		return (
			<KeyboardAwareScrollView>
				
				<SafeAreaView>
					<ScrollView contentContainerStyle={styles.screenContainer}>

						<FlatList
							style={{flexDirection: 'column', flexWrap : "wrap"}}
							numColumns={1}
							data={total_products}
							renderItem={
							({ item }) => (
								<ConnectedProductCard
									navigation={this.props.navigation}
									getIndividualImage = {this.state.get_individual_image}

									isCategoryInstead={false}
									isCard={false}
									dataPayloadFromParent = { item }
									// showCompleteProductCallback = {  }
									addToCartCallback = { () => this.props.add_product_to_cart(item.id) }
									removeFromCartCallback = { () => this.props.remove_product_from_cart(item.id) }		
								/>
							)}
							keyExtractor={(item, index) => String(index)}
						/>

						<View style={{marginTop:50}}>
				  			<ConnectedCreateProduct
								navigation={this.props.navigation}
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