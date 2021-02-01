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
		var base64Image = "data:image/jpeg;base64," + data.image_thumbnail_filepath

		return (
			<View style={styles.outerContainer}>
				<Text style={styles.title}>
					{ data.title }
				</Text>			
			</View>
		);
	}
}
	
CategoryInBulletStyle.defaultProps = {
};


const styles = StyleSheet.create({
	outerContainer: {
		alignItems: 'center',
		justifyContent: 'center', 
		width: windowWidth,
		paddingBottom:windowHeight * 0.03,
		paddingTop:windowHeight * 0.03,
		backgroundColor:'white',
		borderBottomWidth: 1,
		borderColor: '#eee'
	},

// texts
	title:{
		fontSize: 20,
		color: utils.lightGrey,
	},
});

export default CategoryInBulletStyle