
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
} from '../components/videos/';

// IMPORT CONNECTED COMPONENTS
import {
	ConnectedComponentForShowingVideo,
	ConnectedCreateVideo,
} from '../redux_stuff/connected_components';

const { Provider, Consumer } = React.createContext();

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class VideoScreen extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
			axios.get(utils.baseUrl + `/videos/videos-list-with-children`)
			.then((response) => {
				this.props.set_fetched_videos(response.data)
			})
			.catch((error) => {
				console.log(error);
			})


	}
	get_10_more_items() {
		axios.get(utils.baseUrl + `/videos/videos-list-next-10-with-children`)
		.then((response) => {
			this.props.set_fetched_10_more_video(response.data)
		})
		.catch((error) => {
			console.log(error);
		})		
	}

// RENDER METHOD
	render() {
			
		const total_videos = this.props.total_videos


		return (
	  		<View>

				<Provider value={{
					screenChangingCallback: (screen_name, payload_object) => this.props.navigation.navigate(screen_name, payload_object)
				}}>
			  		<View>
			  			<ConnectedCreateVideo/>
			  		</View>

			  		<FlatList
						style={{flexDirection: 'column', flexWrap : "wrap"}}
						numColumns={1}
			  			data={total_videos}
						renderItem={
							({ item }) => (
								<ConnectedComponentForShowingVideo
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

VideoScreen.defaultProps = {
	// : ,
};

export default VideoScreen;

export { Consumer };
