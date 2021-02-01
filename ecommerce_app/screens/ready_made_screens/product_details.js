import React, { Component } from 'react';
import {
	View,
	Image,
	FlatList,
	Dimensions,
	Button,
	StyleSheet,
	Text,
	ScrollView
} from 'react-native';
import {
	Svg,
	Circle,
} from 'react-native-svg';
import { Icon } from 'react-native-elements';

import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph,
	StackedBarChart
} from "react-native-chart-kit";


// IMPORT components without store / redux
import { 
	MyCarouselFlatListBased, 
	ButtonTouchableHighlight, 
	LimitedText,
	AvailableSizesAndColors,
	ImageAtLeftPriceWithQtyAtRight,
	 } from "../components";

import {
	// TextInputFields,
	ImageAtLeftAndDetailedStatisticsAtRight,
	CircledIconAtLeftAndHeadingWithTextAtRight,
	CircledComponent,
	HorizontalDashes,
	TextsAtNewLinesEach,
	QuantityAtCenterPlusMinusButtonsAtEnds,
	IconWIthTextAtLeftEndAndTextAtRightEnd,
	CircularProgressbarAtLeftTextsAtRight,
} from "../components/fitness_app";

import {
	TextInputFields
} from "../components/now_app"

import {LocalNotification} from "../services/push_notifications";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




export default class ProductDetailsScreen extends Component {
	render() {
		return (
			<ScrollView>
				<View>

					<TextInputFields
						paddingLeft={50}
						width={'90%'}
					/>
					<CircularProgressbarAtLeftTextsAtRight/>

					<IconWIthTextAtLeftEndAndTextAtRightEnd/>

					<QuantityAtCenterPlusMinusButtonsAtEnds
						roundBoxColor={'blue'}
						quantity={17}
						textFont={15}
						fontWeight={'bold'}
					/>

					<TextsAtNewLinesEach 
						gapLeft={20}
						gapBetweenTexts={2}
						textList={[
						  {id:'1', content:'Session', fontSize:12, fontWeight:'normal', fontColor:'black'},
						  {id:'2', content:'Reps Full Body', fontSize:15, fontWeight:'normal', fontColor:'black'},
						  {id:'3', content:'6 min, 90 kcl', fontSize:12, fontWeight:'normal', fontColor:'black'},
					  ]}
					/>

					<View style={{
						display:'flex',
						flexDirection: 'row',
						alignSelf:'center',
						alignItems: 'center', 
					}}>
						<HorizontalDashes 
							gap={5}
							dashesList={[
						  	{id:'1'},
						  	{id:'2'},
						  	{id:'3'},
						  	{id:'4'},
						  	{id:'5'},
						  	{id:'6'},
							]}
						/>
						<View style={{flexBasis:30}}>
							<Text style={{fontSize:13}} >2/15</Text>
						</View>
					</View>
				
					<CircledComponent
						circleDia={100}
						circleFillColor={null}
						childWidthOrHeight={60}
					>
						<Icon
						  // raised
						  name='heartbeat'
						  type='font-awesome'
						  iconStyle='Outlined'
						  color='#f50'
						  size={60}
						  // onPress={() => console.log('hello')} 
						  // reverse={true}
						/>
					</CircledComponent>

					<View style={{
						display: 'flex',
						flexDirection: 'row',
						width:'90%',
						alignSelf:'center'
					}} >
						<View style={{
							flex:1
						}} >
							<CircledIconAtLeftAndHeadingWithTextAtRight />
						</View>
						<View style={{
							flex:1,
							paddingHorizontal: 5
						}} >
							<CircledIconAtLeftAndHeadingWithTextAtRight />
						</View>
					</View>

						<ImageAtLeftAndDetailedStatisticsAtRight
							imageSource={require("../images/samosa.jpg")}
							containerHeight={120}
							headingName={'Simons Aberta'}
							description={'Daily Target Statistics'}
						 />
						

						<TextInputFields
							paddingLeft={60}
							backgroundColor={'#inherit'}
							width={'80%'}
							borderColor={'#ffffff'}
							// showIcon={false}
						 />

						<ImageAtLeftPriceWithQtyAtRight 
							productImage={require('../images/samosa.jpg')}
							productName='Paul Hewitt watches'
							productPrice='$399'
							quantity='2'
							checked={true}
							showTickMarkContainer={true}
							/>
						<AvailableSizesAndColors 
							sizesAvailableList = {[
							  {size:'S'}, 
							  {size:'M'}, 
							  {size:'L'}
							  ]}
							/>
						<LimitedText/>
					     <View
					       style={{
					       	marginTop: 30,
					       	width:'90%',
					       }}
					     >
					     	<Button
					     		title="PUSH NOTIFICATION"
					     		color="#841584"
					     	  onPress={LocalNotification}
					     	/>
					     </View>
					     
					     <PieChart
					     	data={[
					     		{
					     			name: "Seoul",
					     			population: 21500000,
					     			color: "rgba(131, 167, 234, 1)",
					     			legendFontColor: "#7F7F7F",
					     			legendFontSize: 15
					     		},
					     		{
					     			name: "Toronto",
					     			population: 2800000,
					     			color: "#F00",
					     			legendFontColor: "#7F7F7F",
					     			legendFontSize: 15
					     		},
					     		{
					     			name: "Beijing",
					     			population: 527612,
					     			color: "red",
					     			legendFontColor: "#7F7F7F",
					     			legendFontSize: 15
					     		},
					     		{
					     			name: "New York",
					     			population: 8538000,
					     			color: "#ffffff",
					     			legendFontColor: "#7F7F7F",
					     			legendFontSize: 15
					     		},
					     		{
					     			name: "Moscow",
					     			population: 11920000,
					     			color: "rgb(0, 0, 255)",
					     			legendFontColor: "#7F7F7F",
					     			legendFontSize: 15
					     		}
					     	]}
					     	width={windowWidth}
					     	height={220}
					     	chartConfig={{
					     		backgroundColor: "#e26a00",
					     		backgroundGradientFrom: "#fb8c00",
					     		backgroundGradientTo: "#ffa726",
					     		decimalPlaces: 2, // optional, defaults to 2dp
					     		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					     		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					     		style: {
					     			borderRadius: 16
					     		},
					     		propsForDots: {
					     			r: "6",
					     			strokeWidth: "2",
					     			stroke: "#ffa726"
					     		}
					     	}}
					     	accessor="population"
					     	backgroundColor="transparent"
					     	paddingLeft="15"
					     	absolute
					     />


					     <StackedBarChart
					       style={{
					     		marginVertical: 8,
					     		borderRadius: 16
					     	}}
					       data={{
					     	  labels: ["Test1", "Test2"],
					     	  legend: ["L1", "L2", "L3"],
					     	  data: [[60, 60, 60], [30, 30, 60]],
					     	  barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
					       }}
					       width={windowWidth}
					       height={220}
					       chartConfig={{
					     		backgroundColor: "#e26a00",
					     		backgroundGradientFrom: "#fb8c00",
					     		backgroundGradientTo: "#ffa726",
					     		decimalPlaces: 2, // optional, defaults to 2dp
					     		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					     		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					     		style: {
					     			borderRadius: 16
					     		},
					     		propsForDots: {
					     			r: "6",
					     			strokeWidth: "2",
					     			stroke: "#ffa726"
					     		}
					     	}}
					     />

					     <BarChart
					       style={{
					     		marginVertical: 8,
					     		borderRadius: 16
					     	}}
					       data={{
					     	  labels: ["January", "February", "March", "April", "May", "June"],
					     	  datasets: [
					     	    {
					     	      data: [20, 45, 28, 80, 99, 43]
					     	    }
					     	  ]
					     	}}
					       width={windowWidth}
					       height={220}
					       yAxisLabel="$"
					       chartConfig={{
					     		backgroundColor: "#e26a00",
					     		backgroundGradientFrom: "#fb8c00",
					     		backgroundGradientTo: "#ffa726",
					     		decimalPlaces: 2, // optional, defaults to 2dp
					     		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					     		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					     		style: {
					     			borderRadius: 16
					     		},
					     		propsForDots: {
					     			r: "6",
					     			strokeWidth: "2",
					     			stroke: "#ffa726"
					     		}
					     	}}
					     	style={{
					     		marginVertical: 8,
					     		borderRadius: 16
					     	}}
					       // verticalLabelRotation={30}
					     />



					     <LineChart
					     	data={{
					     		labels: ["January", "February", "March", "April", "May", "June"],
					     		datasets: [
					     			{
					     				data: [
					     					Math.random() * 100,
					     					Math.random() * 100,
					     					Math.random() * 100,
					     					Math.random() * 100,
					     					Math.random() * 100,
					     					Math.random() * 100
					     				],

					     			}
					     		],
					     		// legend: ["Rainy Days", "Sunny Days", "Snowy Days"]
					     	}}
					     	width={windowWidth}
					     	height={220}
					     	// verticalLabelRotation={30}
					     	// horizontalLabelRotation={30}
					     	hideLegend={false}
					     	yAxisLabel="$"
					     	yAxisSuffix="k"
					     	yAxisInterval={1} // optional, defaults to 1
					     	chartConfig={{
					     		backgroundColor: "#e26a00",
					     		backgroundGradientFrom: "#fb8c00",
					     		backgroundGradientTo: "#ffa726",
					     		decimalPlaces: 2, // optional, defaults to 2dp
					     		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					     		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					     		style: {
					     			borderRadius: 16
					     		},
					     		propsForDots: {
					     			r: "6",
					     			strokeWidth: "2",
					     			stroke: "#ffa726"
					     		}
					     	}}
					     	style={{
					     		marginVertical: 8,
					     		borderRadius: 16
					     	}}
					     	bezier
					     />				

					     <ProgressChart
					       data={{
					     	  labels: ["Swim"
					     	  , "Bike", "Run"
					     	  ], // optional
					     	  data: [0.8  
					     	  , 0.6, 0.8
					     	  ]
					     	}}
					       width={windowWidth}
					       height={220}
					       strokeWidth={5}
					       radius={42}
					       chartConfig={{
					     	  backgroundGradientFrom: "#1E2923",
					     	  backgroundGradientFromOpacity: 0,
					     	  backgroundGradientTo: "#08130D",
					     	  backgroundGradientToOpacity: 0.5,
					     	  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					     	  strokeWidth: 2, // optional, default 3
					     	  barPercentage: 0.5,
					     	  useShadowColorFromDataset: false // optional
					     	}}
					       hideLegend={false}
					     />
				</View>
			</ScrollView>
		);
	}
}