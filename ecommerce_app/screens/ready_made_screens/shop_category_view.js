import React, { Component } from 'react';
import {
	FlatList,
	View,
	Text
} from 'react-native';
import {
	HeadingOrText
} from "../components"
// IMPORT components without store / redux


export default class ShopCategoryViewScreen extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const DATA=[
			{
				id:'1',
				category:'Shoes'
			},
			{
				id:'2',
				category:'Shoes'
			},
			{
				id:'3',
				category:'Shoes'
			},						
			{
				id:'4',
				category:'Shoes'
			},
			{
				id:'5',
				category:'Shoes'
			},
			{
				id:'6',
				category:'Shoes'
			},						
			{
				id:'7',
				category:'Shoes'
			},
			{
				id:'8',
				category:'Shoes'
			},
			{
				id:'9',
				category:'Shoes'
			},						
			{
				id:'10',
				category:'Shoes'
			},						
			{
				id:'11',
				category:'Shoes'
			},						
			{
				id:'12',
				category:'Shoes'
			},						
			{
				id:'13',
				category:'Shoes'
			},
			{
				id:'14',
				category:'Shoes'
			},						
			{
				id:'15',
				category:'Shoes'
			},
			{
				id:'16',
				category:'Shoes'
			},
			{
				id:'17',
				category:'Shoes'
			},						
			{
				id:'18',
				category:'Shoes'
			},						
			{
				id:'19',
				category:'Shoes'
			},						
			{
				id:'20',
				category:'Shoes'
			},						
			{
				id:'16',
				category:''
			},
			{
				id:'17',
				category:''
			},						
			{
				id:'18',
				category:''
			},						
			{
				id:'19',
				category:''
			},						
			{
				id:'20',
				category:''
			},						
			{
				id:'21',
				category:''
			},						

		];
		return (
			<View style={{backgroundColor: '#ffffff'}} >
				<View style={{
					position: 'absolute',
					backgroundColor: 'blue',
					width:'100%',
					height:50,
					top: 250 
				}} ></View>
				<FlatList
					data={DATA} // create DATA as list of objects
					snapToInterval={50}
					renderItem={
						({ item }) => 
							<HeadingOrText
								borderBottomWidth={(item.category ==="") ? 0 : 1}
								text={item.category}
								height={50}
								verticalAlign={'center'}
								fontWeight={'normal'}
								width={'90%'}
								fontSize={20}
								color={'#e2e4e8'}
								borderColor={'#e2e4e8'}
								backgroundColor={'#inherit'}
							/>
						}
					keyExtractor={item => item.id}
				/>
			</View>
		);
	}
}
