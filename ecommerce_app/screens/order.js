import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';

import utils from "../utilities";

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {
	ConnectedOrderCard,
	ConnectedCreateOrder,
} from '../redux_stuff/connected_components';

class OrderScreen extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
			axios.get(utils.baseUrl + '/orders/orders-list-with-children',)
			.then((response) => {
				this.props.set_fetched_orders(response.data)
			})
			.catch((error) => {
				console.log(error);
			})


	}
	get_10_more_items() {
		axios.get(utils.baseUrl + `/orders/orders-list-next-10-with-children`)
		.then((response) => {
			this.props.set_fetched_10_more_order(response.data)
		})
		.catch((error) => {
			console.log(error);
		})		
	}

// RENDER METHOD
	render() {
			
		const total_orders = this.props.total_orders


		return (

  			<ConnectedCreateOrder/>

		);
	}
}

OrderScreen.defaultProps = {
	// : ,
};



export default OrderScreen