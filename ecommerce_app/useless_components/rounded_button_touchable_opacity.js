import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity
} from "react-native";
import PropTypes from 'prop-types';

export default class RoundedButtonTouchableOpacity extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const componentStyle = {
			container:{
				// width:'100%',
				alignItems: this.props.horizontalAlign,
				justifyContent: this.props.verticalAlign  
			},

			roundedButton:{
				backgroundColor:this.props.color,

				borderColor: this.props.color,
				borderRadius: this.props.radius,
				borderWidth: 1,
				borderStyle: 'solid',

				// borderLeftRadius: 10,
				// borderLeftWidth: 1,

				// borderRigthRadius: 10,
				// borderRigthWidth: 1,

				// borderTopRadius: 10,
				// borderTopWidth: 1,

				// borderBottomRadius: 10,
				// borderBottomWidth: 1,

				justifyContent: this.props.labelAlign , 
				alignItems: this.props.labelAlign ,

				// width: '80%',
				width: this.props.width,
				height: this.props.height ,
				paddingHorizontal: this.props.paddingHorizontal ,
				fontWeight: this.props.fontWeight
			},
			
			textForRoundButton:{
			  color: this.props.textColor,
			  fontSize: this.props.fontSize,
			  fontStyle: this.props.fontStyle,
			},
    };

		return (
			<TouchableOpacity
			  activeOpacity={0.2}
			  onPress={() => null }
			>
			  <View style={componentStyle.container} >
			  	<View style={componentStyle.roundedButton} >
			  		<Text style={componentStyle.textForRoundButton} >
			  			{this.props.label}
			  	  </Text>
			  	</View>
			  </View>
			</TouchableOpacity>
		);
	}
}

RoundedButtonTouchableOpacity.defaultProps = {
  horizontalAlign: 'center',
  verticalAlign: 'center',
  width: '80%',
  height: 100,
  label: 'LOGIN WITH FACEBOOK',
  color: '#1e5186',
  radius: 25,
  labelAlign: 'center',
  paddingHorizontal: 60,
  textColor: '#ffffff',
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: 'normal',
};


// MyRNImage
// MyRNText
// MyRNView
// MyRNButton
// MyRNImageBG
// MyRNTextInput
// MyRNScrollView
// MyRNModal
// MyRNFlatList
// MyRNTouchableHighlight
// MyRNTouchableOpacity