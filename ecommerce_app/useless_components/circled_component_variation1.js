import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
} from "react-native";
import PropTypes from 'prop-types';

export default class CircledComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const componentStyle = {
		};
	
		return (
			<View  
				style={{
					borderRadius: this.props.circleDia/2,
					width:this.props.circleDia,
					height:this.props.circleDia,
					alignItems: 'center',
					justifyContent:'center', 
					// alignSelf:'center',
					borderWidth: this.props.circleThickness,
					backgroundColor: this.props.circleFillColor
				}}
			>
				<View 
					style={{
						position:'absolute',
						width:this.props.childWidthOrHeight,
						height:this.props.childWidthOrHeight,
					}} 
				>
					{this.props.children}
				</View>
			</View>	
		);
	}
}

CircledComponent.defaultProps = {
  // : ,
  circleDia: 100,
	circleThickness: 2,
	circleFillColor: null,
	childWidthOrHeight: 80,
};