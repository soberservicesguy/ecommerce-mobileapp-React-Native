import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	FlatList,
	Image,
	SafeAreaView,
	ScrollView,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';

import utils from "../utilities"

// IMPORT COMPONENTS
import {
} from '../components/blogposts/';

// IMPORT CONNECTED COMPONENTS
import {
	ConnectedBlogPostCard,
	ConnectedCreateBlogPost,
} from '../redux_stuff/connected_components';

const { Provider, Consumer } = React.createContext();

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class BlogPostScreen extends Component {
	constructor(props){
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
		axios.get(utils.baseUrl + '/blogpostings/blogposts-list-with-children',)
		.then((response) => {
			this.props.set_fetched_blogposts(response.data)
		})
		.catch((error) => {
			console.log(error);
		})


	}
	get_10_more_items() {
		axios.get(utils.baseUrl + `/blogpostings/blogposts-list-next-10-with-children`)
		.then((response) => {
			this.props.set_fetched_10_more_blogpost(response.data)
		})
		.catch((error) => {
			console.log(error);
		})		
	}

// RENDER METHOD
	render() {
			
		const total_blogposts = this.props.total_blogposts

		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

		return (

				<SafeAreaView>
					<ScrollView contentContainerStyle={styles.screenContainer}>
						
						<View>
				  			<ConnectedCreateBlogPost/>
				  		</View>

			  	  		<FlatList
			  				style={{flexDirection: 'column', flexWrap : "wrap"}}
			  				numColumns={1}
			  	  			data={total_blogposts}
			  				renderItem={
			  					({ item }, index) => (
									<ConnectedBlogPostCard
										dataPayloadFromParent = { item }							
									/>
			  					)}
			  				keyExtractor={(item, index) => String(index)}
			  			/>
				
						
					</ScrollView>
				</SafeAreaView>
				

		);
	}
}

BlogPostScreen.defaultProps = {
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

// scroll view
	screenContainer:{
		// flex:1,
		// display:'flex',
		alignItems: 'center', // horizontally centered
		justifyContent: 'space-between', 
	},
	somethingContainer:{
		marginTop: windowHeight * 0.05, // or 30  gap
		height: windowHeight * 0.1, // or 100
		width: '80%',
		justifyContent: 'center', // vertically centered
		alignSelf: 'center', // horizontally centered
		// backgroundColor: utils.lightGreen,
	},

});

export default BlogPostScreen