import React, { Component } from 'react';
import { 
  StyleSheet,
  View, 
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';

import utils from "../utilities";

import {
	MyCarouselFlatListBased,
	AvailableSizesAndColors,
} from "../components/"

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { Picker } from '@react-native-picker/picker';

import NumericInput from 'react-native-numeric-input'

class IndividualProduct extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		// variations
			product_size_options: [],
			product_color_options: [],

			price: this.props.current_product.price,
			title: this.props.current_product.title,

			product_size: '',
			product_color: '',

			carousels_list: [],

		}	
	}

	get_variations(){

		axios.get(utils.baseUrl + '/products/get-all-variations', 
			{
				params:{
					product_size: this.props.current_product.product_size,
					product_color: this.props.current_product.product_color,
					title: this.props.current_product.title,
				}
			}
		)
		.then((response) => {

			console.log('response.data')
			console.log(response.data)

			this.setState(
				prev => (
					{
						...prev,
						product_size_options: response.data.product_size,
						product_color_options: response.data.product_color,
					}
				)
			)
		})
		.catch(function (error) {
			console.log(error);
		});	

	}


	get_price_according_to_variations(){

		axios.get(utils.baseUrl + '/products/get-price', 
			{
				params:{
					product_size: this.props.current_product.product_size,
					product_color: this.props.current_product.product_color,
					title: this.props.current_product.title,
				}
			}
		)
		.then((response) => {
			if (Number(response.data.price) > 0){

				this.setState(prev => ({...prev, price: response.data.price,}))

			}
		})
		.catch(function (error) {
			console.log(error);
		});	

	}


	get_carousel(){
		axios.get(`${utils.baseUrl}/carousels/get-carousel`)
	    .then(async (response) => {
	    	if (response.data.success){
	    		console.log({carousels_list: response.data.carousels_list})
		    	this.setState({ carousels_list: response.data.carousels_list})
	    	}
		})
		.catch((err) => {
			console.log(err)
		})

	}
// COMPONENT DID MOUNT
	componentDidMount() {

		this._unsubscribeFocus = this.props.navigation.addListener('focus', () => {
			// below will be executed when user enters this screen
			this.get_variations()
			this.get_carousel()
		});

		this._unsubscribeBlur = this.props.navigation.addListener('blur', () => {
			// below will be executed when user leaves this screen
			console.log('I AM UNMOUNTED')

		});

// FETCHING DATA FOR COMPONENT
	}

	componentWillUnmount() {
		this._unsubscribeFocus();
		this._unsubscribeBlur();
	}

// RENDER METHOD
	render() {

		var base64Image = "data:image/jpeg;base64," + this.props.current_product.image_thumbnail_filepath

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

		const DATA=[
			{
				id:'0',
				image:utils.casualShirts
			},
			{
				id:'1',
				image:utils.makeup
			},
			{
				id:'2',
				image:utils.perfumes
			},
			{
				id:'3',
				image:utils.shirts
			},
			{
				id:'4',
				image:utils.shoes
			},
			{
				id:'5',
				image:utils.sportShoes
			},
			{
				id:'6',
				image:utils.sunglasses
			},
			{
				id:'7',
				image:utils.watch
			},
		];



		return (
			<View style={styles.outercContainer}>

				<MyCarouselFlatListBased
					itemsList={DATA}
				/>

				<View style={styles.productAndPriceContainer}>
					<Text style={styles.productTitle}>
						{this.props.current_product.title}
					</Text>

					<Text style={styles.productPrice}>
						{this.props.current_product.price}
					</Text>

				</View>

				<TouchableHighlight activeOpacity={0.2} onPress={() => this.props.add_product_to_cart(this.props.current_product)} style={styles.button}>
					<Text style={styles.innerText}>
						ADD TO CART
					</Text>
				</TouchableHighlight>
				
				<View style={styles.infoContainer}>
					<Text style={{fontWeight:'bold'}}>
						Info
					</Text>
				</View>

				<View style={styles.infoContainer}>

					{/*<AvailableSizesAndColors/>*/}

					<Text>
						Category: {this.props.current_product.category}
					</Text>
					<Text>
						Quantity: {this.props.current_product.initial_quantity}
					</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text>
						Size: {this.props.current_product.product_size}
					</Text>
					<Text>
						Color: {this.props.current_product.product_color}
					</Text>
				</View>

				<View style={styles.quantityContainer}>
					<NumericInput 
						type='up-down'
						totalHeight={windowHeight * 0.08}
						totalWidth={windowWidth * 0.9} 
						onChange={value => console.log(value)} 
					/>
				</View>

				<View style={styles.pickerContainer}>
					<Picker
						selectedValue={this.state.privileges_selected}
						style={{height: 50, width:windowWidth * 0.4}}
						onValueChange={(itemValue, itemIndex) => {

							// this.props.modify_product_size_of_some_item_in_cart(this.props.current_product.id, itemValue)
							this.get_variations()
							this.get_price_according_to_variations()

						}}
					>
						<Picker.Item label="Set Size" value={null} />
						{product_size_menu}
					</Picker>

					<Picker
						selectedValue={this.state.privileges_selected}
						style={{height: 50, width:windowWidth * 0.4}}
						onValueChange={(itemValue, itemIndex) =>  {

							// this.props.modify_product_color_of_some_item_in_cart(this.props.current_product.id, itemValue)
							this.get_variations()
							this.get_price_according_to_variations()
							
						}}
					>
						<Picker.Item label="Set Color" value={null} />
						{product_color_menu}
					</Picker>					
				</View>

			</View>
		);
	}
}
	
IndividualProduct.defaultProps = {
	//:,
};


const styles = StyleSheet.create({
	outercContainer: {
		// alignItems:'center',
		width: windowWidth,
		height:windowHeight,
		// alignItems:'center',
		flex:1,
		// display:'flex',
		// flexDirection: 'column',
		// alignItems:'center',
		justifyContent: 'space-between', 
		// backgroundColor: '#ffffff',

	},

// product title and price
	productAndPriceContainer:{
		flexDirection: 'row',
		// textAlign:'center',
		fontSize:20,
		// backgroundColor:'black',
		justifyContent: 'space-between',
		width:windowWidth * 0.9,
		alignSelf:'center',
	},
	productTitle:{
		fontSize:20
	},
	productPrice:{
		fontSize:20,
		fontWeight:'bold',
	},

// BUY button
	button:{
		marginTop:windowHeight * 0.0005,
		marginBottom:windowHeight * 0.0005,
		backgroundColor: utils.lightGreen,
	},
	innerText:{
		textAlign:'center',
		fontSize: 30,
		paddingBottom:windowHeight * 0.025,
		paddingTop:windowHeight * 0.025,
		color:'white',
	},

// info container
	infoContainer:{
		flexDirection:'row',
		width:windowWidth * 0.9,
		alignSelf:'center',		
		justifyContent: 'space-between',

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

export default IndividualProduct