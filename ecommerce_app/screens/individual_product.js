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

		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
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


		return (
			<View style={styles.outercContainer}>

				<MyCarouselFlatListBased/>

				<View style={styles.productAndPriceContainer}>
					<Text style={styles.productTitle}>
						{this.props.current_product.title}
					</Text>

					<Text style={styles.productPrice}>
						{this.props.current_product.price}
					</Text>

				</View>

				<TouchableHighlight activeOpacity={0.2} onPress={() => {}} style={styles.button}>
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

							this.props.modify_product_size_of_some_item_in_cart(data.id, itemValue)
							this.get_variations()

						}}
					>
						<Picker.Item label="Set Size" value={null} />
						{product_size_menu}
					</Picker>

					<Picker
						selectedValue={this.state.privileges_selected}
						style={{height: 50, width:windowWidth * 0.4}}
						onValueChange={(itemValue, itemIndex) =>  this.props.modify_product_color_of_some_item_in_cart(data.id, itemValue)}
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