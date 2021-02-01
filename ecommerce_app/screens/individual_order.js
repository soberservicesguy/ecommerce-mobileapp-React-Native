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

class IndividualOrder extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
	}

// RENDER METHOD
	render() {
		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

	  	return (
	  		<View>
	  			
	  		</View>
		);
	}
}
	
IndividualOrder.defaultProps = {
	//:,
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

export default IndividualOrder