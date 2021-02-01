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

import {
	ConnectedProductCard,
	ConnectedCreateProduct,
} from '../redux_stuff/connected_components';

class ProductScreen extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
		axios.get(utils.baseUrl + '/products/products-list',)
		.then((response) => {
			this.props.set_fetched_products(response.data)
		})
		.catch((error) => {
			console.log(error);
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
				
			<SafeAreaView>
				<ScrollView contentContainerStyle={styles.screenContainer}>

					<View>
			  			<ConnectedCreateProduct/>
			  		</View>

					<FlatList
						style={{flexDirection: 'column', flexWrap : "wrap"}}
						numColumns={1}
						data={total_products}
						renderItem={
						({ item }) => (
							<ConnectedProductCard
								isCategoryInstead={true}
								isCard={false}
								dataPayloadFromParent = { item }
								// showCompleteProductCallback = {  }
								addToCartCallback = { () => this.props.add_product_to_cart(item.id) }
								removeFromCartCallback = { () => this.props.remove_product_from_cart(item.id) }		
							/>
						)}
						keyExtractor={(item, index) => String(index)}
					/>
				
				</ScrollView>
			</SafeAreaView>

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