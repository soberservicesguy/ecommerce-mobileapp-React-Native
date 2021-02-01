import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	FlatList,
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

class CartScreen extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			switchScreen: false,

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

// RENDER METHOD
	render() {
			
		const cart = this.props.complete_cart

		// parameters being passed from previous route
		// const endpoint_params_passed = this.props.match.params


		if ( this.state.switchScreen !== false ){

			// switching it back to false
			this.setState(prev => ({...prev, switchScreen: (prev.switchScreen === false) ? true : false }))

			// redirecting
			this.props.navigation.navigate('Individual-Cart-Item', {
				itemId: 86,
				otherParam: 'anything you want here',
			})

		} else {

			return (
				<View>

		  	  		<FlatList
		  				style={{flexDirection: 'column', flexWrap : "wrap"}}
		  				numColumns={1}
		  	  			// data={cart}
		  	  			data={[1,2,4]}
		  				renderItem={
		  					({ item }) => (
								<View>
									<ConnectedComponentForShowingCart
										dataPayloadFromParent = { item }
									// not needed, since its redux
										// product_size_modify_callback = { (product_size) => this.props.modify_product_size_of_some_item_in_cart(item.id, product_size) }
										// initial_quantity_modify_callback = { (initial_quantity) => this.props.modify_initial_quantity_of_some_item_in_cart(item.id, initial_quantity) }
										// product_color_modify_callback = { (product_color) => this.props.modify_product_color_of_some_item_in_cart(item.id, product_color) }						
										// remove_from_cart_callback = { () => this.props.remove_product_from_cart(item.id) }
										
										// toggle_size_modal_callback = { () => this.toggle_product_size_modal() }
										// toggle_quantity_modal_callback = { () => this.toggle_initial_quantity_modal() }
										// toggle_color_modal_callback = { () => this.toggle_product_color_modal() }
									/>
								</View>
		  					)}
		  				keyExtractor={(item, index) => String(index)}
		  			/>

				</View>
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

	},

});

export default CartScreen