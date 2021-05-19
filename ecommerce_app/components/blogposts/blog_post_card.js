import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native";
import PropTypes from 'prop-types';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import axios from 'axios';

import { Consumer } from "../../screens/blog_post"

import {
	ComponentForShowingBlogPost
} from "."

import utils from "../../utilities";

class BlogPostCard extends Component {
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
		let data = this.props.dataPayloadFromParent

		return (
			<TouchableOpacity activeOpacity={0.2} style={styles.outerContainer} onPress={() => {
				this.props.set_current_blogpost(data)
				this.props.navigation.navigate('Individual_BlogPost')
			}}>
		  		<ComponentForShowingBlogPost
		  			getIndividualImage={this.props.getIndividualImage}
					dataPayloadFromParent = { this.props.dataPayloadFromParent }
		  		/>
	  		</TouchableOpacity>
		);
	}
}
	
BlogPostCard.defaultProps = {

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

export default BlogPostCard;