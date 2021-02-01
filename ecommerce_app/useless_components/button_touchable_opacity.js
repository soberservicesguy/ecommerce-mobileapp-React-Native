import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import PropTypes from 'prop-types';

export default class ButtonTouchableOpacity extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const componentStyle = {
			container:{
				width:'100%',
				alignSelf: 'center', 
				alignItems: 'center',
				justifyContent: 'flex-start',
				display: 'flex',
				flexDirection: 'row',
				backgroundColor: this.props.backgroundColor // '#ffffff' 
			},
			
			textForButton:{
			  color: this.props.textColor,
			  fontSize: this.props.fontSize,
			  fontStyle: this.props.fontStyle,
			},

			imageForButton:{
				resizeMode: "center",
			  height: this.props.imageHeight,
			  width: this.props.imageWidth,
			
			  // opacity:
			  // tintColor: 1
			  // overlayColor:
			
			  // backgroundColor: ,
			},
			imageContainer:{
				flex:1,
				display: this.props.showImage,
				flexGrow: this.props.imageFlexGrow,
				 // 'none'
			},
			textContainer:{
				flex:1,
				display: this.props.showText,
				flexGrow: this.props.textFlexGrow,
			},
			gap:{
				flex:this.props.gapFlexValue
			}
    };

		return (
			<TouchableOpacity
			  activeOpacity={0.2}
			  onPress={() => null }
			>
			  <View style={componentStyle.container} >
					<View style={componentStyle.gap}></View>
		  	  <View style={componentStyle.imageContainer} >
		  	  	<Image
			  	  	source={this.props.imageSource} // {require('./images/samosa.jpg')}
			  	  	style={componentStyle.imageForButton}
		  	  	/>
		  	  </View>
		  	  
		  	  <View style={componentStyle.textContainer} >
			  		<Text style={componentStyle.textForButton} >
			  			{this.props.label}
			  	  </Text>
			  	</View>

			  	<View style={componentStyle.gap}></View>
			  </View>
			</TouchableOpacity>
		);
	}
}

ButtonTouchableOpacity.defaultProps = {
  // imageSource:
  label: 'click me',
  showText: 'flex',
  showImage: 'flex',
  backgroundColor: 'white',
  textColor: 'black',
	fontSize: 15,
	fontStyle: 'normal',
	imageHeight: 50,
	imageWidth: 50,
	gapFlexValue: 2,
	imageFlexGrow:1,
	textFlexGrow:1,
};