import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import PropTypes from 'prop-types';

export default class TextWithTouchableHighlight extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const componentStyle = {
			container:{
				width:'100%',
				height: this.props.height,
				alignItems: this.props.horizontalAlign,
				justifyContent: this.props.verticalAlign  
			},
			text:{
				fontWeight: this.props.fontWeight,
				fontSize: this.props.fontSize,
				color: this.props.color,
				textAlign: this.props.textAlign, 
				fontStyle: this.props.fontStyle,
				letterSpacing: this.props.letterSpacing,
				lineHeight: this.props.lineHeight,
			}
		};

		return (
			<TouchableHighlight
			  // style={componentStyle.hightlight}
			  onPress={() => null }
			  activeOpacity={0.5}
			  underlayColor='inherit'
			>
			  <View style={componentStyle.container} >
			    <Text style={componentStyle.text} >
			      {this.props.text}
			    </Text>
			  </View>
			</TouchableHighlight>
		);
	}
}

TextWithTouchableHighlight.defaultProps = {
  text: 'Already have an account?',
  height: 30,
  horizontalAlign: 'center',
  verticalAlign: 'center',
  fontWeight: 'normal',
  fontSize: 15,
  color: 'black',
  textAlign: 'left',
  height: 100,
	fontStyle: 'normal',
	letterSpacing: .5,
	// backgroundColor: '#ffffff',

};