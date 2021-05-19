import React, { Component } from 'react';
import { 
	FlatList,
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	Modal,
	TouchableOpacity,
	Image,
} from "react-native";
import PropTypes from 'prop-types';
					
import axios from 'axios';

import utils from "../../utilities";

import { Consumer } from "../../screens/blog_post"

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class ComponentForShowingBlogPost extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			image_src:null,
		}

	}

// COMPONENT DID MOUNT
	componentDidMount() {

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

		});


	}


	componentDidUpdate(prevProps, prevState, snapshot) {


		if (prevProps.getIndividualImage === false && this.props.getIndividualImage === true){
			console.log('getting image')
			this.getImage()

		} else if (this.props.getIndividualImage === true){
			this.getImage()
		}


	}

	render() {

		const data = this.props.dataPayloadFromParent // data being plugged from parent flatlist
		var base64Image = "data:image/jpeg;base64," + data.image_thumbnail_filepath


		return (
			<View style={styles.outerContainer}>
				<Text style={styles.title}>
					{ data.title }
				</Text>

				<View style={styles.imageContainer}>
					<Image source={{uri: this.state.image_src}} alt="" 
						style={{
							width:200, 
							height:200, 
							resizeMode: "stretch"
						}}
					/>
				</View>

				<Text>
					Tags: { data.all_tags }
				</Text>
			</View>
		);
	}
}
	
ComponentForShowingBlogPost.defaultProps = {

};

const styles = StyleSheet.create({
	outerContainer: {
		paddingLeft:10,
		paddingRight:10,
		marginBottom:30,
	},
	title:{
		fontWeight:'bold',
		fontSize:20,
		textAlign:'center',
	},
	imageContainer:{

	},
});

export default ComponentForShowingBlogPost