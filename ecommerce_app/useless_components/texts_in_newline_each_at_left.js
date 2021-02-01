import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
} from "react-native";
import PropTypes from 'prop-types';

export default class TextsAtNewLinesEach extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const componentStyle = {
		};
	
		return (
			<View
				style={{
					marginLeft:this.props.gapLeft,
					paddingLeft:0
				}}
			>
				{this.props.textList.map(
					(item) => 
						<Text 
							key={item.id}
							style={{
								fontSize:item.fontSize,
								fontWeight:item.fontWeight,
								color:item.fontColor,
								paddingVertical:0,
								marginTop:this.props.gapBetweenTexts,
							}} 
						>
							{item.content}
						</Text>
				)}
			</View>
		);
	}
}

TextsAtNewLinesEach.defaultProps = {
	gapLeft:10,
	gapBetweenTexts:10,
  textList:[
  {id:'1', content:'Session', fontSize:12, fontWeight:'normal', fontColor:'black'},
  {id:'2', content:'Reps Full Body', fontSize:15, fontWeight:'normal', fontColor:'black'},
  {id:'3', content:'6 min, 90 kcl', fontSize:12, fontWeight:'normal', fontColor:'black'},
  ] ,
};