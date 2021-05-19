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

class CategoryInBulletStyle extends Component {
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
		var base64Image = "data:image/jpeg;base64," + data.image_filepath

		// console.log(Object.keys(data))

		return (
			<View style={styles.outerContainer}>
				<Text style={styles.title}>
					{ data.product_category_name }
				</Text>
				<View style={styles.imageContainer}>
					<Image 
						source={{uri: base64Image}} 
						// source={utils.firstScreenBG} 
						style={styles.imageStyle}
					/>
				</View>
			</View>
		);
	}
}
	
CategoryInBulletStyle.defaultProps = {
};


const styles = StyleSheet.create({
	outerContainer: {
		height:300,
		alignItems: 'center',
		justifyContent: 'center', 
		width: windowWidth,
		paddingBottom:10,
		backgroundColor:'white',
		borderBottomWidth: 1,
		borderColor: '#eee',
		marginBottom:10,
	},

// texts
	title:{
		fontSize: 25,
		color: 'black',
	},


	imageContainer:{
		height: 200, // or 100
		// height: '50%',
		// marginBottom: windowHeight * 0.1,
		justifyContent: 'center', // vertically centered
		alignSelf: 'center', // horizontally centered
		// backgroundColor: utils.lightGreen,
	},
	imageStyle:{
		// resizeMode: "contain / center / cover / stretch / repeat",
		resizeMode: 'stretch',
		height: 200,
		width: 400,
		// width: '50%',		
	},

});

export default CategoryInBulletStyle