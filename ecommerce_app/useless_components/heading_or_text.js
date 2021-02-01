import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
} from "react-native";
import PropTypes from 'prop-types';

export default class HeadingOrText extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const componentStyle = {
			container:{
				width: this.props.width,
				height: this.props.height,
				alignSelf: this.props.horizontalAlign, 
				backgroundColor: this.props.backgroundColor,
				// alignItems: this.props.horizontalAlign,
				justifyContent: this.props.verticalAlign,
				paddingVertical: 0,
				marginVertical: 0,

				borderColor: this.props.borderColor,
				borderBottomWidth: this.props.borderBottomWidth,
				borderTopWidth: this.props.borderTopWidth,
				borderLeftWidth: this.props.borderLeftWidth,
				borderRigthWidth: this.props.borderRigthWidth,
			},
			heading:{
				fontWeight: this.props.fontWeight,
				fontSize: this.props.fontSize,
				color: this.props.color,
				textAlign: this.props.textAlign, 
				fontStyle: this.props.fontStyle,
				letterSpacing: this.props.letterSpacing,
				lineHeight: this.props.lineHeight,
				paddingLeft: this.props.paddingLeft,
				paddingVertical: 0,
				marginVertical: 0,
			},
		};

		return (
			<View 
				style={componentStyle.container}
			>
				<Text 
					style={componentStyle.heading}
				>
					{ this.props.text }
				</Text>
			</View>		
		);
	}
}

HeadingOrText.defaultProps = {
  text: 'your heading',
  horizontalAlign: 'center',
	verticalAlign: 'center',
  width: '100%',
  fontWeight: 'bold',
  fontSize: 20,
  color: 'black',
  textAlign: 'center',
  height: 50,
	backgroundColor: '#ffffff',
	fontStyle: 'normal',
	letterSpacing: 2,
	paddingLeft: 10,
	// lineHeight: .1,
	borderColor:'#000000',
	borderBottomWidth:0,
	borderTopWidth:0,
	borderLeftWidth:0,
	borderRigthWidth:0,
};