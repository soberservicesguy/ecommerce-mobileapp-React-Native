import React, { Component } from 'react';
import { 
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

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProductInBulletStyle extends Component {
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

		const data = this.props.dataPayloadFromParent // data being plugged from parent flatlist
		var base64Image = "data:image/jpeg;base64," + data.image_thumbnail_filepath

		return (
			<View style={styles.outerContainer}>
				<View style={styles.imageContainer}>
					<Image
						source={utils.firstScreenBG}
						// source={base64Image} 
						style={{
							width:100, 
							height:100, 
							resizeMode: "contain",
							borderRadius: 20,
						}}
					/>
				</View>

				<View style={styles.detailsContainer}>
					<Text style={styles.title}>
						{ data.title }
					</Text>

					<View style={{
						display:'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
						<Text style={styles.product_color}>
							 Color: { data.product_color }
						</Text>
						<Text style={styles.product_size}>
							Size: { data.product_size }
						</Text>
					</View>

					<Text style={styles.price}>
						Price: { data.price }
					</Text>
				</View>

			</View>
		);
	}
}
	
ProductInBulletStyle.defaultProps = {
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

export default ProductInBulletStyle