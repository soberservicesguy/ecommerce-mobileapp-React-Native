import React, {Component} from 'react';
// IMPORT classes to use
import { 
	ImageBackground,
	View, 
	FlatList,
	// Button,
	// Text,
	// TouchableOpacity,
	// TouchableHighlight,
} from "react-native";
// IMPORT components without store / redux
import {
	ImageAtLeftTextsAtRight,
} from "../components/index";
// IMPORT connected components
// import {ConnectedSomeComponent} from "../redux_stuff/connected_components";


export default class ListViewProductCategoryScreen extends Component {
	constructor(props) {
			super(props);
	}

	render() {
		DATA=[
			{
				id:'1',

				imageSource:require('../images/samosa.jpg'),
				
				categoryName:'Shoes Category',
				
				description:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
			},
			{
				id:'2',

				imageSource:require('../images/samosa.jpg'),
				
				categoryName:'Shoes Category',
				
				description:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
			},
			{
				id:'3',

				imageSource:require('../images/samosa.jpg'),
				
				categoryName:'Shoes Category',
				
				description:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
			},
			{
				id:'4',

				imageSource:require('../images/samosa.jpg'),
				
				categoryName:'Shoes Category',
				
				description:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
			},
			{
				id:'5',

				imageSource:require('../images/samosa.jpg'),
				
				categoryName:'Shoes Category',
				
				description:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
			},
			{
				id:'6',

				imageSource:require('../images/samosa.jpg'),
				
				categoryName:'Shoes Category',
				
				description:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
			},
			{
				id:'7',

				imageSource:require('../images/samosa.jpg'),
				
				categoryName:'Shoes Category',
				
				description:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
			},
			{
				id:'8',

				imageSource:require('../images/samosa.jpg'),
				
				categoryName:'Shoes Category',
				
				description:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
			},
			{
				id:'9',

				imageSource:require('../images/samosa.jpg'),
				
				categoryName:'Shoes Category',
				
				description:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
			},

		];

		return (
			<View>
				<FlatList
					data={DATA} // create DATA as list of objects
					renderItem={
						({ item }) => 
						<ImageAtLeftTextsAtRight
							imageSource={item.imageSource}
							headingName={item.categoryName}
							description={item.description}
							headingFontSize={15}
							headingFontWeight={'bold'}
							textFlexGrow={4}
							endGapWidth={10}
						/>
					}
					keyExtractor={item => item.id}
				/>        
			</View>
		);
	}
}