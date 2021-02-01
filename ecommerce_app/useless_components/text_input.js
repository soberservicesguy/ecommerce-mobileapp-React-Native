import React, { Component } from 'react';
import { 
  TextInput,
  StyleSheet,
} from "react-native";
import PropTypes from 'prop-types';

export default class TextInputFields extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const componentStyle = {
			textInput:{
				color: this.props.filledTextColor,
				width: this.props.width,
				fontSize: this.props.fontSize,
				paddingLeft: this.props.paddingLeft,
				borderWidth: this.props.borderWidth,
				borderColor: this.props.borderColor,
				backgroundColor: this.props.backgroundColor,
			},
		};

		return (
			<TextInput
				placeholder="Type your password"
				placeholderTextColor = "#e2e4e8"
				// maxLength=10
				// caretHidden=true
				// multiline=true
				// numberOfLines=3
				// onChangeText={ () => null }
				// value='dummy'
				// autoFocus=true
				style={componentStyle.textInput}
			/>			
		);
	}
}

TextInputFields.defaultProps = {
  width: '100%',
  fontSize: 20,
  paddingLeft: 20,
  borderWidth: 1,
  borderColor: '#e2e4e8',
  backgroundColor: '#ffffff',
  filledTextColor: '#e2e4e8'
};