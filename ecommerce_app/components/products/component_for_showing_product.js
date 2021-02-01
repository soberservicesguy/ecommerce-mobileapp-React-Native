import React, { Component } from 'react';
import { 
	FlatList,
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	Modal,
	TouchableOpacity,
	Button,
	Image,
} from "react-native";
import PropTypes from 'prop-types';
					
import axios from 'axios';

import utils from "../../utilities";

import { Consumer } from "../../screens/product"

import {
	ConnectedProductInBulletStyle,
	ConnectedProductInCardStyle,
} from "../../redux_stuff/connected_components"

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ComponentForShowingProduct extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {

		}

	}

// COMPONENT DID MOUNT
	componentDidMount() {

	}

	render() {

		return (
			<View>
				{ this.props.isProductShapeCard === true ? 
					<ConnectedProductInCardStyle
						dataPayloadFromParent={this.props.dataPayloadFromParent}
					/> : 
					<ConnectedProductInBulletStyle
						dataPayloadFromParent={this.props.dataPayloadFromParent}
					/> }
			</View>
		);
	}
}
	
ComponentForShowingProduct.defaultProps = {
	isProductShapeCard:true,
};


const styles = StyleSheet.create({
	outerContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center', 
		width: '100%',
		paddingBottom:10,
		paddingTop:10,
		marginTop: windowHeight * 0.01,
		marginBottom: windowHeight * 0.01,		
		borderBottomWidth: 2,
		borderBottomColor:'#eee'
	},
	imageContainer:{
		flexBasis: windowWidth * 0.25
	},
	detailsContainer:{
		flexBasis: windowWidth * 0.65
	},

	itemPropertiesContainer:{
		display:'flex',
		flexDirection: 'row',
		justifyContent: 'space-between' 
	},
	title:{
		fontSize: 20,
		fontWeight: 'bold',
	},
	price:{
		fontSize: 18,
		color:utils.lightBlue,
		// fontWeight: 'bold'
	},
	product_size:{
		fontSize: 15,
	},
	product_color:{
		fontSize: 15,
	},

});

export default ComponentForShowingProduct