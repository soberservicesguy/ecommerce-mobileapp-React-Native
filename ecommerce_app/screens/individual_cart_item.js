import React, { Component } from 'react';
import { 
  StyleSheet,
  View, 
  Text,
  TouchableHighlight,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';

import utils from "../utilities";

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class IndividualCartItem extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
		const { serial_number } = this.props.navigation.params

		axios.get(utils.baseUrl + '/blogposts/blogpost-with-summarized-children', 
			{params: {serial_number: serial_number } }
		)
		.then((response) => {
			this.props.set_current_cart_item(response.data)
		})
		.catch((error) => {
			console.log(error);
		})

	}

// RENDER METHOD
	render() {

		// modifiable attributes are supplied by previous container
		const {
				} = this.props.match.params 

		// only using schemafields from axios request which are not modifiable attributes
		const {
				endpoint, 
				image_thumbnail_filepath, 
				title, 
				first_para, 
				initial_tags, 
				second_para, 
				third_para, 
				fourth_para, 
				all_tags, 
				timestamp_of_uploading, 
				} = this.props.current_cart_item



		const current_cart_item = this.props.current_cart_item



	  	return (
		  	<View>
		  	</View>
		);
	}
}
	
IndividualCartItem.defaultProps = {
	//:,
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

export default IndividualCartItem