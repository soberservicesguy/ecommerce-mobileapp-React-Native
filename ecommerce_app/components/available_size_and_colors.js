import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';
// import firebase from 'firebase';

import utils from "../utilities";

export default class AvailableSizesAndColors extends Component {
	componentDidMount(){
	}

	constructor(props) {
		super(props);

		this.state={
			sizeStates:[],
			colorStates: [],
			// initialSetColors:this.props.colorsAvailableList,
			colorsAvailableList: this.props.colorsAvailableList,
			sizesAvailableList: this.props.colorsAvailableList,
		};
	}
	
	render() {
		const componentStyle = {
		};
// activateSelectedColor METHOD
	// docstring
		/* 
			PURPOSE:
				To change css on clicked component generated by map function				
	
			CODING STRATEGY/TECHNIQUE:
				To add 'clicked' in list relevant to the the component clicked while '' to all others, and to assign their original
	
			CODING STEPS:
				Ran for loop over colorsavailable prop's length and checked if the index (obtained by event) is same as iterator, then its marked clicked otherwise ''
				Running setstate method while preserving old state in other areas
	
			HOW TO USE:
				() => activateSelectedColor(index)
				it takes index as argument
	
		*/
// CODE	
		const activateSelectedColor = (index) => {
			var newStateList = [];  //var newColorStates = [];
		
			for (let i = 0; i < this.props.colorsAvailableList.length; i++){
				if (i === index){
					newStateList[i] = 'clicked';
				} else if (i !== index) {
					newStateList[i] = '';
				};
			}
	
			this.setState(
				prev => (
					{	
						...prev,
						colorStates:newStateList,
					}
				),
				// below is promise
					() => {
						// console.log(this.state);
					}
			);
		}
// activateSelectedSize METHOD
// docstring
	/* 
	same as above, just some hard coded variables changed
	*/
// CODE
		const activateSelectedSize = (index) => {
			var newStateList = [];  //var newColorStates = [];
		
			for (let i = 0; i < this.props.sizesAvailableList.length; i++){
				if (i === index){
					newStateList[i] = 'clicked';
				} else if (i !== index) {
					newStateList[i] = '';
				};
			}
	
			this.setState(
				prev => (
					{	
						...prev,
						sizeStates:newStateList,
					}
				),
				// below is promise
					() => {
						// console.log(this.state);
					}
			);
		}

// RETURN METHOD
		return (
			<View style={{
					width: '95%', 
					height:50,
					alignSelf: 'center',
					display: 'flex', 
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center' 
				}}>
				{(this.props.sizesAvailableList).map( (item, index) => (
					<TouchableOpacity 
						key={String(index)}
						onPress={() => activateSelectedSize(index)}
					>
						<View key={item.size} style={{
							display: 'flex', 
							flexDirection: 'row', 
							alignSelf: 'center',
							// flexBasis: 30,
							width:25,
							height:25,
							// paddingHorizontal: 10,
							paddingHorizontal:7,
							paddingVertical: 5,
							marginHorizontal: 5,
							borderWidth: 1,
							borderRadius: 7,
							borderColor: 'gery',


							backgroundColor: ( 
								(this.state.sizeStates[index]==='clicked') ? 'blue' : 'white' 
							),
						}}>
							<Text style={{
									textAlign: 'center', 
									alignSelf: 'center'}}>
								{item.size}		
							</Text>
						</View>
					</TouchableOpacity>
						)
					)}
				
				<View style={{flex:1}}></View>
			
				<View style={{
					display: 'flex', 
					flexDirection: 'row' ,
					alignSelf: 'center', 
					paddingHorizontal: 10,
				
				}}>
					{(this.props.colorsAvailableList).map( (item, index) => (
						<TouchableOpacity 
							key={String(index)}
							activeOpacity={0}
							onPress={() => activateSelectedColor(index)}
						>
							<View style={{
								backgroundColor: ( 
									(this.state.colorStates[index]==='clicked') ? 'blue' : item.color
								),
								flexBasis: 25,	
								width:25,
								height:25,				
								borderRadius: 30/2,
								// paddingHorizontal:8,
								// paddingVertical:8,
								marginHorizontal: 5,
								borderWidth: .8,
								borderColor: 'white',
							}} 
							>
							</View>	
						</TouchableOpacity>
						)
					)}
				</View>

			</View>
		);
	}
}

AvailableSizesAndColors.defaultProps = {
	centralGap:100,
  sizesAvailableList:[
  {size:'S'}, 
  {size:'M'}, 
  {size:'L'}
  ] ,
  colorsAvailableList:[ 
	  {color:'orange'}, 
	  {color:'grey'}, 
	  {color:'black'},
  ],
};