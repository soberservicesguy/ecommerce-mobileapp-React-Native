import React, { Component } from 'react';
import { 
  StyleSheet,
  View, 
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';

import utils from "../utilities";

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class IndividualIndividualBlogPost extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
	}

// RENDER METHOD
	render() {
		const { classes } = this.props;
		const {_xs, _sm, _md, _lg, _xl} = this.props

		var base64Image = "data:image/jpeg;base64," + this.props.current_blogpost.image_thumbnail_filepath

		return (
			<View style={styles.imageContainer}>
				<Image source={base64Image} alt="" 
					style={{
						width:200, 
						height:400, 
						resizeMode: "contain"
					}}
				/>

				<Text>
					{this.props.current_blogpost.title}
				</Text>
				
				<Text>
					{this.props.current_blogpost.first_para}
				</Text>
				
				<Text>
					{this.props.current_blogpost.initial_tags}
				</Text>
				
				<Text>
					{this.props.current_blogpost.second_para}
				</Text>
				
				<Text>
					{this.props.current_blogpost.qouted_para}
				</Text>
				
				<Text>
					{this.props.current_blogpost.third_para}
				</Text>
				
				<Text>
					{this.props.current_blogpost.fourth_para}
				</Text>
				
				<Text>
					{this.props.current_blogpost.all_tags}
				</Text>
				
			</View>
		);
	}
}
	
IndividualIndividualBlogPost.defaultProps = {
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

export default IndividualIndividualBlogPost