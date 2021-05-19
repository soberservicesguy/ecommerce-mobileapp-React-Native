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
	// CategoryInCardStyle,
	// CategoryInBulletStyle,
} from "."

import utils from "../../utilities";

import {
	ConnectedProductInCard,
	ConnectedCategoryInBulletStyle,
	// ConnectedProductInCardStyles,
} from "../../redux_stuff/connected_components"


class ProductCard extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			expanded: false,
			image_src: null,
		}	

	}

	getImage(){

		// this.setState({ image_src: null })
		let image_object_id = this.props.dataPayloadFromParent.image_thumbnail_filepath

		axios.get(`${utils.baseUrl}/blogpostings/get-image`, 
			{
				params: {
					image_object_id: image_object_id
				}
			}
		)
	    .then(async (response) => {
	    	if (response.data.success){
		    	this.setState({ image_src: "data:image/jpeg;base64," + response.data.image})
	    	}

		})
		.catch((err) => {
			console.log(err)
		})


	}

	componentDidUpdate(prevProps, prevState, snapshot) {


		if (prevProps.getIndividualImage === false && this.props.getIndividualImage === true){
			console.log('getting image')
			this.getImage()

		}

	}


// COMPONENT DID MOUNT
	componentDidMount() {

	}

	render() {

		// console.log({isCategoryInstead:this.props.isCategoryInstead, isCard:this.props.isCard})

	  	let componentToShow
		if (this.props.isCategoryInstead && this.props.isCard){ 
			componentToShow = (
					<ConnectedProductInCard
						navigation={this.props.navigation}
						image_src={this.state.image_src}
						dataPayloadFromParent={this.props.dataPayloadFromParent}
					/>
			)
		} else if (this.props.isCategoryInstead && this.props.isCard === false){
			componentToShow = (
				<TouchableOpacity activeOpacity={0.2} style={styles.outerContainer} onPress={() => {
					this.props.navigation.push('Content_Drawer', {screen:'Products', params:{product_category_name: this.props.dataPayloadFromParent.product_category_name}})
				}}>
					<ConnectedCategoryInBulletStyle
						navigation={this.props.navigation}
						dataPayloadFromParent={this.props.dataPayloadFromParent}
					/>
				</TouchableOpacity>
			)
		} else if (this.props.isCategoryInstead === false && this.props.isCard){

			componentToShow = (
				<ConnectedProductInCard
					navigation={this.props.navigation}
					image_src={this.state.image_src}
					dataPayloadFromParent={this.props.dataPayloadFromParent}
				/>
			)
		} else {
			componentToShow = (
				<ProductInBulletStyle
					navigation={this.props.navigation}
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