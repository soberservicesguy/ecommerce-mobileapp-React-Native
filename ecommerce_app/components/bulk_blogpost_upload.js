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

import DocumentPicker from 'react-native-document-picker';

class BulkBlogpostUpload extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			expanded:false,
			swtichScreen: false,
			image_main: [],
			excel_sheet:'',
		}

	}


// COMPONENT DID MOUNT
	componentDidMount() {

	}

	render() {

		// parameters being passed from previous route
		const endpoint_params_passed = this.props.match.params

		if ( this.state.swtichScreen !== false ){

			// switching it back to false
			this.setState(prev => ({...prev, swtichScreen: (prev.swtichScreen === false) ? true : false }))

			// redirecting
			this.props.navigation.navigate('BlogPost', {
				itemId: 86,
				otherParam: 'anything you want here',
			})

		} else {

			return (
			// e.g a social post, textinput which lets user to enter text, takes persons id as assigned object
				<View style={styles.outerContainer}>

					<View style={styles.textinputContainer}>
						<Button 
							title={'UPLOAD BLOPOST IMAGES HERE'}
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
									// 	console.log(res.uri, res.type, res.name, res.size); // res.type is mimeType
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
						title={'Press To Create Bulk BlogPosts'}
						style={styles.buttonWithoutBG}
						onPress={ () => {

							// let setResponseInFetchedBlogPosts = (arg) => this.props.set_fetched_blogposts(arg)
							let redirectToNewBlogPosts = () => this.setState(prev => ({...prev, swtichScreen: (prev.swtichScreen === false) ? true : false }))	

							// in formData send individual variables and not a complete object
							// formData.append('video_object', video_object) // THIS WILL NOT WORK, SENT VARS INDIVIDUALLY
							const formData = new FormData()
							// attaching multiple files with formData
							Array.from(this.state.image_main).forEach((file) => {
								formData.append('blogpost_image_main', {uri: file.uri, type: file.type, name: file.name})
							})
							formData.append('excel_sheet_for_blogpost', {uri: this.state.excel_sheet.uri, type: this.state.excel_sheet.type, name: this.state.excel_sheet.name})

							axios.post(utils.baseUrl + '/uploads/bulk-upload-blogposts', formData)
							.then(function (response) {
								console.log(response.data) // current blogpost screen data
								
								// set to current parent object
								// setResponseInFetchedBlogPosts(response.data.new_blogpost)

								// change route to current_blogpost
								redirectToNewBlogPosts()

							})
							.catch(function (error) {
								console.log(error)
							});						

						}}
					/>

					<View>
						<Button
							title={'Press To DELETE ALL BLOGPOSTS'}
							style={styles.buttonWithoutBG}
							onPress={ () => {
								axios.get(utils.baseUrl + '/uploads/bulk-delete-blogposts')
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
}
	
BulkBlogpostUpload.defaultProps = {

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

export default BulkBlogpostUpload