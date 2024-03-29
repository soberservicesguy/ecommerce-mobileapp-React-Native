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
	Button,
	TextInput,
} from "react-native";
import PropTypes from 'prop-types';
					
import axios from 'axios';

import utils from "../../utilities";

import { Consumer } from "../../screens/product"

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { Picker } from '@react-native-picker/picker';

import NumericInput from 'react-native-numeric-input'

class ComponentForShowingCart extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			show_product_size_modal: false,
			show_initial_quantity_modal: false,
			show_product_color_modal: false,

			product_size: '',
			product_color: '',
			title: this.props.dataPayloadFromParent.title,

		// variations
			product_size_options: [],
			product_color_options: [],
		}


	}

// COMPONENT DID MOUNT
	componentDidMount() {
		console.log(this.props.dataPayloadFromParent.title)
		this.getImage()
		this.get_variations()
		// console.log('COMPONENT')
		// console.log(this.props.dataPayloadFromParent)
	}

	get_variations(){
		console.log('TRIGGERED')

		axios.get(utils.baseUrl + '/products/get-all-variations', 
			{
				params:{
					product_size: this.state.product_size,
					product_color: this.state.product_color,
					title: this.props.dataPayloadFromParent.title,
				}
			}
		)
		.then((response) => {
			this.setState(
				prev => {

					// prev.product_size_options
					// response.data.product_size

					// prev.product_color_options
					// response.data.product_color
					if (prev.product_size_options.length > 0 || prev.product_color_options.length > 0){
						let newSizeFound = false
						for (let i = 0; i < prev.product_size_options.length; i++) {
							let old = prev.product_size_options[i]
							let filtered = response.data.product_size.filter((item) => item == old)
							if (filtered.length == 0){
								newSizeFound = true
								console.log({newSizeFound})
								break
							}
						}

						let newColorFound = false
						for (let i = 0; i < prev.product_color_options.length; i++) {
							let old = prev.product_color_options[i]
							let filtered = response.data.product_color.filter((item) => item == old)
							if (filtered.length == 0){
								newColorFound = true
								console.log({newColorFound})
								break
							}
						}

						if (newSizeFound || newColorFound){
							return ({
								...prev,
								product_size_options: response.data.product_size,
								product_color_options: response.data.product_color,
							})
						}

					} else {
						return ({
							...prev,
							product_size_options: response.data.product_size,
							product_color_options: response.data.product_color,
						})						
					}
				}
			)
		})
		.catch(function (error) {
			console.log(error);
		});	

	}

	toggle_product_size_modal(){
		this.setState(
			prev => (
				{
					...prev,
					show_product_size_modal: (prev.show_product_size_modal === false) ? true : false 
				}
			)
		)
	}


	toggle_initial_quantity_modal(){
		this.setState(
			prev => (
				{
					...prev,
					show_initial_quantity_modal: (prev.show_initial_quantity_modal === false) ? true : false 
				}
			)
		)
	}


	toggle_product_color_modal(){
		this.setState(
			prev => (
				{
					...prev,
					show_product_color_modal: (prev.show_product_color_modal === false) ? true : false 
				}
			)
		)
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

		})
		.catch((err) => {
			console.log(err)
		})


	}

	render() {
		const data = this.props.dataPayloadFromParent // data being plugged from parent flatlist
		console.log('data')
		console.log(data)
		var base64Image = "data:image/jpeg;base64," + data.image_thumbnail_filepath

		const product_color_menu = this.state.product_color_options.map((option, index) => {

			return (
				<Picker.Item key={String(index)} label={`${option}`} value={`${option}`} />
			)

		})

		const product_size_menu = this.state.product_size_options.map((option, index) => {

			return (
				<Picker.Item key={String(index)} label={`${option}`} value={`${option}`} />
			)

		})


		return (

			<View style={{marginTop:20}}>

				<View style={styles.outerContainer}>
					<View style={styles.imageAndTextContainer}>
						<View style={styles.imageContainer}>
							<Image 
								// source={base64Image}
								source={{uri: this.state.image_src}}

								style={{
									width:windowWidth * 0.25, 
									height:windowHeight * 0.15, 
									resizeMode: "stretch"
								}}
							/>
						</View>
						<View style={styles.textContainer}>
							<Text>
								Title: { data.title }
							</Text>
							<View style={styles.productAttributes}>
								<Text>
									Price: { data.price }
								</Text>

								<Text>
									Quantity: { this.state.quantity_selected ? this.state.quantity_selected : data.initial_quantity }
								</Text>
							</View>
							<View style={styles.productAttributes}>
								<Text>
									Size: { data.product_size }
								</Text>
								<Text>
									Color: { data.product_color }
								</Text>
							</View>
						</View>
					</View>

					<View style={styles.quantityContainer}>
						<NumericInput 
							type='up-down'
							totalHeight={windowHeight * 0.05}
							totalWidth={windowWidth * 0.9} 
							onChange={value => this.setState({ quantity_selected: value })} 
						/>
					</View>

					<View style={styles.pickerContainer}>
						<Picker
							selectedValue={this.state.size_selected}
							style={{height: windowHeight * 0.05, width:windowWidth * 0.4}}
							onValueChange={(itemValue, itemIndex) => {

								this.props.modify_product_size_of_some_item_in_cart(data.id, itemValue)
								this.get_variations()
								this.setState({ size_selected: itemValue })


							}}
						>
							<Picker.Item label="Set Size" value={null} />
							{product_size_menu}
						</Picker>

						<Picker
							selectedValue={this.state.color_selected}
							style={{height: windowHeight * 0.05, width:windowWidth * 0.4}}
							onValueChange={(itemValue, itemIndex) =>  {
								this.props.modify_product_color_of_some_item_in_cart(data.id, itemValue)
								this.get_variations()
								this.setState({ color_selected: itemValue })
							}}
						>
							<Picker.Item label="Set Color" value={null} />
							{product_color_menu}
						</Picker>					
					</View>


					<Button
						color={'grey'}
						title={'Remove from cart'} 
						onPress = { () => this.props.remove_from_cart_callback() }
					/>
						
				</View>
				
			</View>

		);
	}
}
	
ComponentForShowingCart.defaultProps = {

};

const styles = StyleSheet.create({
	outerContainer: {
		// alignItems:'center',
		width: windowWidth,
		// height:windowHeight,
		// alignItems:'center',
		flex:1,
		// display:'flex',
		// flexDirection: 'column',
		// alignItems:'center',
		justifyContent: 'space-between', 
		// backgroundColor: '#ffffff',

	},

	imageAndTextContainer:{
		flexDirection: 'row',
		alignItems:'center',
		width: windowWidth * 0.9,
		alignSelf: 'center',

	},
	imageContainer:{
		flex:1,
		backgroundColor: '#000000'
	},
	textContainer:{
		flex:3,
		paddingLeft:windowWidth * 0.1
	},
	productAttributes:{
		flexDirection:'row',
		justifyContent: 'space-between' 
	},

// quantity
	quantityContainer:{
		alignSelf:'center',		
	},

// picker
	pickerContainer:{
		width:windowWidth * 0.9,
		alignSelf:'center',
		flexDirection:'row',
		justifyContent: 'space-between',

	},

});

export default ComponentForShowingCart