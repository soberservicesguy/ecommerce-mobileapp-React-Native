import React, { Component } from 'react';
import { 
	FlatList,
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	Modal,
	TouchableOpacity,
} from "react-native";
import PropTypes from 'prop-types';
					
import axios from 'axios';

import utils from "../../utilities";

import { Consumer } from "../../screens/carousel"

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ComponentForShowingCarousel extends Component {
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

		return (
			<View style={styles.outerContainer}>
				<View style={styles.imageContainer}>
					<Image source={base64Image} alt="" 
						style={{
							width:200, 
							height:400, 
							resizeMode: "contain"
						}}
					/>
				</View>

				<Text>
					{ data.title }
				</Text>

				<Text>
					{ data.endpoint }
				</Text>
			</View>
		);
	}
}
	
ComponentForShowingCarousel.defaultProps = {

};

const styles = StyleSheet.create({
	outerContainer: {
	},
});

export default ComponentForShowingCarousel