
import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	FlatList,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';
import firebase from 'firebase';

import utils from "../utilities"

// IMPORT COMPONENTS
import {
} from '../components/blogposts/';

// IMPORT CONNECTED COMPONENTS
import {
	ConnectedComponentForShowingBlogPost,
	ConnectedCreateBlogPost,
} from '../redux_stuff/connected_components';

const { Provider, Consumer } = React.createContext();

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class BlogPostScreen extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
			axios.get(utils.baseUrl + `/blogposts/blogposts-list-with-children`)
			.then((response) => {
				this.props.set_fetched_blogposts(response.data)
			})
			.catch((error) => {
				console.log(error);
			})


	}
	get_10_more_items() {
		axios.get(utils.baseUrl + `/blogposts/blogposts-list-next-10-with-children`)
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


		return (
	  		<View>

				<Provider value={{
					screenChangingCallback: (screen_name, payload_object) => this.props.navigation.navigate(screen_name, payload_object)
				}}>
			  		<View>
			  			<ConnectedCreateBlogPost/>
			  		</View>

			  		<FlatList
						style={{flexDirection: 'column', flexWrap : "wrap"}}
						numColumns={1}
			  			data={total_blogposts}
						renderItem={
							({ item }) => (
								<ConnectedComponentForShowingBlogPost
									dataPayloadFromParent = { item }

									comments_quantity = { item.comments_quantity }
									commentss = { item.commentss }

									likes_quantity = { item.likes_quantity }
									likess = { item.likess }

									user_quantity = { item.user_quantity }
									users = { item.users }
						
								/>
							)}
						keyExtractor={(item, index) => String(index)}
					/>
				</Provider>
			</View>
		);
	}
}

BlogPostScreen.defaultProps = {
	// : ,
};

export default BlogPostScreen;

export { Consumer };
