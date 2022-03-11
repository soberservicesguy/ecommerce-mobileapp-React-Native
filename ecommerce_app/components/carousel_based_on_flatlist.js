import React, { Component } from 'react';
import {
	View,
	Image,
	FlatList,
	Dimensions
} from 'react-native';
import {
	Svg,
  Circle,
} from 'react-native-svg';

import utils from "../utilities";

// IMPORT components without store / redux

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const bulletsData={
	currentBullet:1,
	bulletGap:15,
	bulletRadius:'4',
	verticalOffset:'15',
	containerHeight:'30',
	activeBulletColor:'black',
	inactiveBulletColor:'blue'
};

const DATA=[
	{
		id:'0',
		image:utils.casualShirts
	},
	{
		id:'1',
		image:utils.makeup
	},
	{
		id:'2',
		image:utils.perfumes
	},
	{
		id:'3',
		image:utils.shirts
	},
	{
		id:'4',
		image:utils.shoes
	},
	{
		id:'5',
		image:utils.sportShoes
	},
	{
		id:'6',
		image:utils.sunglasses
	},
	{
		id:'7',
		image:utils.watch
	},
];


const bulletsHorizontalStartSetter = () => {return(
	windowWidth/2	
	- (
	(Number(bulletsData.bulletRadius) * 2) * (DATA.length) / 4
	+ (DATA.length - 1) * Number(bulletsData.bulletGap)
	) / 2
	);
}

const bulletSpacer = (index) => {
	if (index === 0) {
		return 0 + Number(bulletsData.bulletRadius);
	} else {
		return (0 + Number(bulletsData.bulletRadius)  + index * bulletsData.bulletGap);
	}
};

const detectingScrollsEvent =	(event) =>{
	(event.nativeEvent.contentOffset.x === 2*windowWidth) ? 
		console.log(event.nativeEvent.contentOffset.x) :
		null
};

export default class MyCarouselFlatListBased extends Component {
// CONSTRUCTOR with rfs and state
	constructor(props) {
		super(props);
	// creating ref to component
		this.scrollRef = React.createRef();
	// creating state
		this.state = {
			selectedIndex:0
		}
	}

// COMPONENTDIDMOUNT automating scroll
	// firing automatically events 
		componentDidMount = () => {
	// using setInterval which used setState
			setInterval(()=>{
	// setState takes prev state and returns new state object, fires another callback having scrollTo method				
				this.setState(
					prev => ({ selectedIndex: (prev.selectedIndex===DATA.length-1) ? 0 : prev.selectedIndex + 1 }),
	// below is callback / promise
					() => {
	// scrollTo doesnt work in flatlist, scrollToIndex works though takes 3 attributes
						this.scrollRef.current.scrollToIndex({
							animated:true, 
							index:this.state.selectedIndex
						});
					}
				);
			}, 3000);
		};

// RENDER method start
	render() {
// DESTRUCTURING of props and state
		const {images} = this.props;
		const {activeBullet} = this.state;

// SCROLLVIEW EVENTS function that checks what screen is scrollview is on through events
		const setSelectedIndex = event => {
			const viewSize = event.nativeEvent.layoutMeasurement.width;
			const contentOffset = event.nativeEvent.contentOffset.x;

			const selectedIndex = Math.floor(contentOffset/viewSize);
			this.setState({selectedIndex});
		};

// RETURN METHOD
		return (
			<View>
				<FlatList
// setting ref				
				  ref={this.scrollRef}
				  data={this.props.itemsList} //{DATA} // create DATA as list of objects
				  horizontal={true}
				  pagingEnabled={true}
				  onMomentumScrollEnd={setSelectedIndex}
				  onScroll={detectingScrollsEvent}
				  scrollEventThrottle={windowWidth}
				  showsHorizontalScrollIndicator={false}
				  renderItem={this.props.itemToRenderFunction}
				  keyExtractor={item => item.id}
				/>
				<Svg 
					height={this.props.bulletsContainerHeight} //{bulletsData.containerHeight} 
					width={windowWidth}
					style={{
						position: 'absolute',
						width:{windowWidth},
						height:30,
						top: 250-25,
						left:this.props.bulletsHorizontalShift // bulletsHorizontalStartSetter()
					}}
				>
					{DATA.map(
// drawing shapes using svg						
// creating list of components using map function					 
						(carouselItem, index) => (
							<Circle 
					  		key={String(index)}
								cx={bulletSpacer(index)}
								cy={this.props.bulletVerticalShift} // {bulletsData.verticalOffset} 
								r= {this.props.bulletRadius}  // {bulletsData.bulletRadius} 
				  			fill={
// set css based on index and make it work forever
				  				(index === this.state.selectedIndex) ? 
			  					bulletsData.activeBulletColor : 
			  					bulletsData.inactiveBulletColor
				  			}
				  		/>
						)
				  )}
				</Svg>
			</View>
		);
	}
}

MyCarouselFlatListBased.defaultProps = {
	itemsList:DATA,
	bulletsContainerHeight:bulletsData.containerHeight,
	bulletsHorizontalShift:bulletsHorizontalStartSetter(),
	bulletVerticalShift:bulletsData.verticalOffset,
	bulletRadius:bulletsData.bulletRadius,
	itemToRenderFunction: ({ item }) => 
  	<Image
  		source={item.image}
  		style={{
  			resizeMode: "stretch",
  		  height: 250,
  		  width: windowWidth,
  		}}
  	/>

};

// (unused) bulletSpacer but center aligner ,creating function with if else statements
	// creating bullets using sequencing first center then right, then left
	// CENTRAL SEQUENCER
	// const bulletSpacer = (index) => {
	//   if (index === 0) {
	//       return windowWidth / 2;
	//   } else if (index % 2 === 1) {
	//       return windowWidth / 2 + bulletsData.bulletGap * Math.floor((index+1)/2);
	//   } else if (index % 2 === 0) {
	//       return windowWidth / 2 - bulletsData.bulletGap * Math.floor(index/2);
	//   }
	// };

// (unuseds) creating multiples of number and checking whether a number is a multiple of some
		// const scrollSensor= () => {
		// 	const totalItems = DATA.length;
		// 	const sensingScrollIntervals=[]; 
		// 		for (var i = windowWidth; i +=windowWidth; i<totalItems*windowWidth+1) {
		// 	 	sensingScrollIntervals.push(i)
		// 	 }
		// 	return sensingScrollIntervals; 
		// }




// fat aero function only used  () inside jsx hence can return only one thing
// to make fat aero function to have multiple statements use  {}
// to make fat aero function to have single statement or return single item use ()