import React, { Component } from 'react';
import { 
  View, 
} from "react-native";
import PropTypes from 'prop-types';

export default class Gap extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const componentStyle = {
			gap:{
				height: this.props.height,
				width: this.props.width
			}
		};

		return (
      <View style={componentStyle.gap} ></View>			
		);
	}
}

Gap.defaultProps = {
  height: 30,
  width: 30
};