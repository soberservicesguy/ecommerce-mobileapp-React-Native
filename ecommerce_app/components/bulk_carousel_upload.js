import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	TouchableOpacity,
	Button,
} from "react-native";
import PropTypes from 'prop-types';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import axios from 'axios';

import DocumentPicker from 'react-native-document-picker';
import utils from "../utilities";

class BulkCarouselUpload extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			expanded:false,
			image_main: [],
			excel_sheet:'',
		}

	}


// COMPONENT DID MOUNT
	componentDidMount() {

	}

	render() {

		return (
		// e.g a social post, textinput which lets user to enter text, takes persons id as assigned object
			<View style={styles.outerContainer}>


				<View style={styles.textinputContainer}>

					<Button 
						title={'Select CAROUSEL IMAGES From Phone'}
						style={styles.buttonWithoutBG}
						onPress={async () => {
							try {
								const results = await DocumentPicker.pickMultiple({
									type: [
										DocumentPicker.types.images,
									],
								});
								// setState method with response as argument
								this.setState(prev => ({...prev, image_main: results}))
								// results.map((res) => {
									// console.log(res.uri, res.type, res.name, res.size); // res.type is mimeType
								// })
							} catch (err) {
								if (DocumentPicker.isCancel(err)) {
									// User cancelled the picker, exit any dialogs or menus and move on
								} else {
									console.log(err)
									// throw err;
								}
							}
						}}
					/>
				</View>

				<View style={styles.textinputContainer}>
					<Button 
						title={'Select EXCEL SHEET From Phone'}
						style={styles.buttonWithoutBG}
						onPress={async () => {
							try {
								let res = await DocumentPicker.pick({
									type: [
										DocumentPicker.types.xls,
										DocumentPicker.types.xlsx,
									],
								});
								console.log(res.uri, res.type, res.name, res.size); // res.type is mimeType
								// setState method with response as argument
								this.setState(prev => ({...prev, excel_sheet: res}))

							} catch (err) {
								if (DocumentPicker.isCancel(err)) {
									// User cancelled the picker, exit any dialogs or menus and move on
								} else {
									console.log(err)
									// throw err;
								}
							}
						}}
					/>
				</View>


				<Button 
					title={'Press To Create Bulk Carousels'}
					style={styles.buttonWithoutBG}
					onPress={ () => {

						// let setResponseInFetchedBlogPosts = (arg) => this.props.set_fetched_blogposts(arg)
						let redirectToNewCarousels = () => this.props.navigation.navigate('Products', {itemId: 86, otherParam: 'anything you want here',})

						const formData = new FormData()
						// attaching multiple files with formData
						Array.from(this.state.image_main).forEach((file) => {
							formData.append('carousel_image_main', {uri: file.uri, name: file.name, type: file.type})
						})
						formData.append('excel_sheet', {uri: this.state.excel_sheet.uri, name: this.state.excel_sheet.name, type: this.state.excel_sheet.type})

						axios.post(utils.baseUrl + '/uploads/bulk-upload-carousels', formData)
						.then(function (response) {
							console.log(response.data) // current blogpost screen data
							
							// set to current parent object
							// setResponseInFetchedBlogPosts(response.data.new_blogpost)

							// change route to current_blogpost
							redirectToNewCarousels()

						})
						.catch(function (error) {
							console.log(error)
						});						

					}}
				/>

				<View>
					<Button 
						title={'Press To DELETE ALL CAROUSELS'}
						style={styles.buttonWithoutBG}
						onPress={ () => {
							axios.get(utils.baseUrl + '/uploads/bulk-delete-carousels')
							.then(function (response) {
								console.log(response.data)
							})
							.catch(function (error) {
								console.log(error)
							});
						}}
					/>
				</View>

			</View>
		);
			
	}
}
	
BulkCarouselUpload.defaultProps = {

};

const styles = StyleSheet.create({
	outerContainer:{
		flexDirection: 'column',
		alignItems:'center',
		flex:1,
		// display:'flex',
		// flexDirection: 'column',
		alignItems:'center',
		justifyContent: 'space-around', 
	},
});

export default BulkCarouselUpload