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

class ProductInCardStyles extends Component {
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
			<TouchableOpacity activeOpacity={0.2} style={styles.outerContainer} onPress={() => {
				this.props.set_current_product(data)
				this.props.navigation.navigate('Individual_Product', {image_thumbnail_filepath: this.state.image_src})
			}}>

				<View style={styles.imageContainer}>
					<Image 
						// source={{uri: base64Image}} 
						source={{uri: this.props.image_src}}
						// source={utils.firstScreenBG} 
						style={styles.imageStyle}
					/>
				</View>
				<Text style={styles.title}>
					{ data.title }
				</Text>

{/*				<View style={{
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
				</View>*/}

				<Text style={styles.price}>
					Price: { data.price }
				</Text>

				
			</TouchableOpacity>
		);
	}
}
	
ProductInCardStyles.defaultProps = {
};


const styles = StyleSheet.create({
	outerContainer: {
		display: 'flex',
		// flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center', 
		width: '45%',
		// paddingBottom:10,
		// paddingTop:10,
		marginTop: windowHeight * 0.01,
		borderTopRightRadius:10,	
		borderTopLeftRadius:10,
		backgroundColor:'white',
		marginLeft:10,
		marginRight:10,
	},

// image
	imageContainer:{
		borderTopRightRadius:10,
		borderTopLeftRadius:10,
		// borderWidth:1,

		// marginTop: windowHeight * 0.05, // or 30  gap
		height: windowHeight * 0.2, // or 100
		// height: '50%',
		// marginBottom: windowHeight * 0.1,
		justifyContent: 'center', // vertically centered
		alignSelf: 'center', // horizontally centered
		// backgroundColor: utils.lightGreen,
	},
	imageStyle:{
		borderTopRightRadius:10,
		borderTopLeftRadius:10,
		// borderWidth:1,

		// resizeMode: "contain / center / cover / stretch / repeat",
		resizeMode: 'stretch',
		// height: windowHeight * 0.45,
		height: '100%',
		width: windowWidth * 0.45,
		// width: '50%',		
	},


// texts
	title:{
		marginTop: windowHeight * 0.02,
		fontSize: 20,
		fontWeight: 'bold',
	},
	price:{
		marginBottom: windowHeight * 0.02,
		fontSize: 18,
		color:utils.lightBlue,
		// fontWeight: 'bold'
	},

});

export default ProductInCardStyles