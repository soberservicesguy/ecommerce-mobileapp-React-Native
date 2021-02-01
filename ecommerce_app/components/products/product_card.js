import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	TouchableOpacity,
	Button,
	Image,
} from "react-native";
import PropTypes from 'prop-types';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import axios from 'axios';

import { Consumer } from "../../screens/product"

import {
	ProductInBulletStyle,
	ProductInCardStyle,
	// ComponentForShowingProduct,
	CategoryInCardStyle,
	CategoryInBulletStyle,
} from "."

import utils from "../../utilities";

// import {
// } from "../../redux_stuff/connected_components"


class ProductCard extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			expanded: false,
		}	

	}


// COMPONENT DID MOUNT
	componentDidMount() {

	}

	render() {

	  	let componentToShow
		if (this.props.isCategoryInstead && this.props.isCard){ 
			componentToShow = (
				<CategoryInCardStyle
					dataPayloadFromParent={this.props.dataPayloadFromParent}
				/>
			)
		} else if (this.props.isCategoryInstead && this.props.isCard === false){
			componentToShow = (
				<CategoryInBulletStyle
					dataPayloadFromParent={this.props.dataPayloadFromParent}
				/>
			)
		} else if (this.props.isCategoryInstead === false && this.props.isCard){
			componentToShow = (
				<ProductInCardStyle
					dataPayloadFromParent={this.props.dataPayloadFromParent}
				/>
			)
		} else {
			componentToShow = (
				<ProductInBulletStyle
					dataPayloadFromParent={this.props.dataPayloadFromParent}
				/>
			)
		}
		
		return (
			componentToShow
		);
	}
}
	
				{/*<Button
		  			title={'add to cart'}
		  			onPress = {() => {
		  				this.props.add_product_to_cart(this.props.dataPayloadFromParent)
		  			}}
		  		/>*/}
ProductCard.defaultProps = {
	isCategoryInstead: true, // true makes it category and not product
	isCard:false, // true makes it card and not bullet
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

export default ProductCard