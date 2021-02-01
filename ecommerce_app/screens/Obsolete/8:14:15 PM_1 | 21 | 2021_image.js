
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
} from '../components/images/';

// IMPORT CONNECTED COMPONENTS
import {
	ConnectedComponentForShowingImage,
	ConnectedCreateImage,
} from '../redux_stuff/connected_components';

const { Provider, Consumer } = React.createContext();

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ImageScreen extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
			axios.get(utils.baseUrl + `/images/images-list-with-children`)
			.then((response) => {
				this.props.set_fetched_images(response.data)
			})
			.catch((error) => {
				console.log(error);
			})


	}
	get_10_more_items() {
		axios.get(utils.baseUrl + `/images/images-list-next-10-with-children`)
		.then((response) => {
			this.props.set_fetched_10_more_image(response.data)
		})
		.catch((error) => {
			console.log(error);
		})		
	}

// RENDER METHOD
	render() {
			
		const total_images = this.props.total_images


		return (
	  		<View>

				<Provider value={{
					screenChangingCallback: (screen_name, payload_object) => this.props.navigation.navigate(screen_name, payload_object)
				}}>
			  		<View>
			  			<ConnectedCreateImage/>
			  		</View>

			  		<FlatList
						style={{flexDirection: 'column', flexWrap : "wrap"}}
						numColumns={1}
			  			data={total_images}
						renderItem={
							({ item }) => (
								<ConnectedComponentForShowingImage
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

ImageScreen.defaultProps = {
	// : ,
};

export default ImageScreen;

export { Consumer };
