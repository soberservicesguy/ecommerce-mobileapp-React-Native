
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import 'react-native-gesture-handler';
import {
	Image,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

// IMPORT created components
// import {
//	ButtonTouchableHighlight,
//	ImageAtLeftTextsAtRight,
//	Gap
// } from './components/ready_made_components';

// import NetInfo from "@react-native-community/netinfo";

// import {
// 	request_multiple_permissions,
// } from "./handy_functions/permissions_functions"

// IMPORT CONNECTED CONTAINERS
import {
	ConnectedSignUpOrLoginScreen,
	ConnectedSignUpScreen,
	ConnectedLoginScreen,
	ConnectedCarouselScreen,
	ConnectedIndividualCarousel,
	ConnectedProductScreen,
	ConnectedIndividualProduct,
	ConnectedCartScreen,
	ConnectedIndividualCartItem,
	ConnectedOrderScreen,
	ConnectedIndividualOrder,
	ConnectedBlogPostScreen,
	ConnectedIndividualBlogPost,
	ConnectedBulkBlogpostUpload,
	ConnectedBulkCarouselUpload,
	ConnectedBulkProductUpload,
} from "./redux_stuff/connected_components";


const Stack = createStackNavigator();

function SignInStack({navigation}) {
	return (
		<Stack.Navigator
			// headerMode='none'
		>
			<Stack.Screen name="SignUpOrLogin" component={ ConnectedSignUpOrLoginScreen }
				options={{ 
					headerShown:false,
					title: 'Create an account',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
				}}
			/>

			<Stack.Screen name="SignUp" component={ ConnectedSignUpScreen }
				options={{ 
					headerShown:true,
					title: 'Create an account',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
				}}
			/>

			<Stack.Screen name="Login" component={ ConnectedLoginScreen }
				options={{ 
					headerShown:true,
					title: 'Login',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
				}}
			/>


		</Stack.Navigator>
	);
}


function InnerStack({navigation}) {
	return (
		<Stack.Navigator
			// headerMode='none'
		>
			<Stack.Screen name="Order" component={ ConnectedOrderScreen }
				options={{ 
					headerShown:true,
					title: 'Checkout',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Cart" component={ ConnectedCartScreen }
				options={{ 
					headerShown:true,
					title: 'Cart',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>


			<Stack.Screen name="Individual-Product" component={ConnectedIndividualProduct}
				options={{ 
					headerShown:false,
					title: 'Individual Product',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>


			<Stack.Screen name="Products" component={ ConnectedProductScreen }
				options={{ 
					headerShown:true,
					title: 'Products',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>


			<Stack.Screen name="BlogPost" component={ ConnectedBlogPostScreen }
				options={{ 
					headerShown:true,
					title: 'BlogPost',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>
		
			<Stack.Screen name="Video" component={ ConnectedCarouselScreen }
				options={{ 
					headerShown:true,
					title: 'Video',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>
		


			<Stack.Screen name="IndividualCart" component={ ConnectedIndividualCartItem }
				options={{ 
					headerShown:true,
					title: 'Image',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="IndividualOrder" component={ ConnectedIndividualOrder }
				options={{ 
					headerShown:true,
					title: 'Image',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="BulkBlogpostUpload" component={ ConnectedBulkBlogpostUpload }
				options={{ 
					headerShown:true,
					title: 'Image',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="BulkCarouselUpload" component={ ConnectedBulkCarouselUpload }
				options={{ 
					headerShown:true,
					title: 'Image',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="BulkProductUpload" component={ ConnectedBulkProductUpload }
				options={{ 
					headerShown:true,
					title: 'Image',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Individual_BlogPost" component={ConnectedIndividualBlogPost}
				options={{ 
					headerShown:true,
					title: 'Individual BlogPost',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>
		
			<Stack.Screen name="Individual_Video" component={ConnectedIndividualCarousel}
				options={{ 
					headerShown:true,
					title: 'Individual Video',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

		
			<Stack.Screen name="Fashion_Blogs" component={ConnectedBlogPostScreen}
				payload_for_filter = {{category: 'Fashion'}}
				options={{ 
					headerShown:true,
					title: 'Fashion Blogs',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Food_Blogs" component={ConnectedBlogPostScreen}
				payload_for_filter = {{category: 'Food'}}
				options={{ 
					headerShown:true,
					title: 'Food Blogs',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Travel_Blogs" component={ConnectedBlogPostScreen}
				payload_for_filter = {{category: 'Travel'}}
				options={{ 
					headerShown:true,
					title: 'Travel Blogs',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Lifestyle_Blogs" component={ConnectedBlogPostScreen}
				payload_for_filter = {{category: 'Lifestyle'}}
				options={{ 
					headerShown:true,
					title: 'Lifestyle Blogs',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Fitness_Blogs" component={ConnectedBlogPostScreen}
				payload_for_filter = {{category: 'Fitness'}}
				options={{ 
					headerShown:true,
					title: 'Fitness Blogs',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="DIY_Blogs" component={ConnectedBlogPostScreen}
				payload_for_filter = {{category: 'DIY'}}
				options={{ 
					headerShown:true,
					title: 'DIY Blogs',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Film_&_Animation_Videos" component={ConnectedCarouselScreen}
				payload_for_filter = {{category: 'Film & Animation'}}
				options={{ 
					headerShown:true,
					title: 'Film & Animation Videos',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Autos_&_Vehicles_Videos" component={ConnectedCarouselScreen}
				payload_for_filter = {{category: 'Autos & Vehicles'}}
				options={{ 
					headerShown:true,
					title: 'Autos & Vehicles Videos',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Pets_&_Animals_Videos" component={ConnectedCarouselScreen}
				payload_for_filter = {{category: 'Pets & Animals'}}
				options={{ 
					headerShown:true,
					title: 'Pets & Animals Videos',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Sports_Videos" component={ConnectedCarouselScreen}
				payload_for_filter = {{category: 'Sports'}}
				options={{ 
					headerShown:true,
					title: 'Sports Videos',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Travel_&_Events_Videos" component={ConnectedCarouselScreen}
				payload_for_filter = {{category: 'Travel & Events'}}
				options={{ 
					headerShown:true,
					title: 'Travel & Events Videos',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Entertainment_Videos" component={ConnectedCarouselScreen}
				payload_for_filter = {{category: 'Entertainment'}}
				options={{ 
					headerShown:true,
					title: 'Entertainment Videos',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Animals_Images" component={ConnectedProductScreen}
				payload_for_filter = {{category: 'Animals'}}
				options={{ 
					headerShown:true,
					title: 'Animals Images',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Architecture_Images" component={ConnectedProductScreen}
				payload_for_filter = {{category: 'Architecture'}}
				options={{ 
					headerShown:true,
					title: 'Architecture Images',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Food_Images" component={ConnectedProductScreen}
				payload_for_filter = {{category: 'Food'}}
				options={{ 
					headerShown:true,
					title: 'Food Images',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Sports_Images" component={ConnectedProductScreen}
				payload_for_filter = {{category: 'Sports'}}
				options={{ 
					headerShown:true,
					title: 'Sports Images',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Travel_Images" component={ConnectedProductScreen}
				payload_for_filter = {{category: 'Travel'}}
				options={{ 
					headerShown:true,
					title: 'Travel Images',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Stack.Screen name="Nature_Images" component={ConnectedProductScreen}
				payload_for_filter = {{category: 'Nature'}}
				options={{ 
					headerShown:true,
					title: 'Nature Images',
					headerTitleAlign: 'center',
					headerBackTitleVisible: false,
					headerLeft: () => (	<TouchableOpacity activeOpacity={0.2} onPress={() => this.props.navigation.goBack()} style={{
						marginTop:50,
						marginBottom:50,
					}}>
						<Text>
							Go Back
						</Text>
					</TouchableOpacity>	),
					headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

		</Stack.Navigator>
	);
}

const Tabs = createBottomTabNavigator();
function BottomTabs() {
	return (
		<Tabs.Navigator
			tabBar={() => 
				<View>
				</View>
			} // tabBar closed
			// backBehavior= 'initialRoute / order / history / none'

			// tabBarOptions={{
			//   activeTintColor:'',
			//   inactiveTintColor:'',
			//   activeBackgroundColor:'',
			//   inactiveBackgroundColor:'',
				
			//   showLabel: true / false,
			//   showIcon: true / false,

			//   labelPosition: 'beside-icon / below-icon'  
			//   tabStyle: // style object
			//   labelStyle: // style object
			//   style: // style object

			// }}

			// screenOptions={{
			//     title:'',
			//     tabBarVisible: true /false,
			//     tabBarIcon: , // function returning tab bar icon
			//     tabBarLabel: , // function returning label in tab bar
			//     tabBarButton: , // function returning tabbar button
			//   }}
		>
			<Tabs.Screen 
				name="Entire Stack" 
				component={SignInStack}
				// options={{
				// 	title:'',
				// 	drawerLabel: , // function returning label
				// 	drawerIcon: ,// function returning icon
				// }} 
			/>

		</Tabs.Navigator>
	)
} 




const Drawer = createDrawerNavigator();

// component returning drawer with screens
function TheDrawer() {
	return (
		<Drawer.Navigator
			headerMode='none'
			// initialRouteName= ''
			// backBehavior= 'initialRoute / order / history / none'
			// drawerPosition= 'left / right'
			// drawerType='front / back / slide / permanent'
			hideStatusBar={false}
			drawerStyle={{ // style object
				backgroundColor: '#000000'
			}}

			drawerContent={()=>
				<ScrollView>
					<View>
					</View>
				</ScrollView>
			} // function returning element			
		>
			<Drawer.Screen name="Feeds" component={BottomTabs} />
		</Drawer.Navigator>
	);
}


const RootStack = createStackNavigator();


class AppNavigation extends Component {
	constructor(props) {
			super(props);
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		// // Typical usage (don't forget to compare states) BUT STATE IS THROUGH props IN REDUX
		// if (this.props.contacts !== prevProps.contacts) {
		// 	show_all_contacts_and_set_in_state()
		// 	console.log("--------LOG--------")
		// 	console.log( this.props.contacts )
		// }

		// if ( this.props.is_internet_connected === false &&  prevProps.is_internet_connected === true){
			// console.log('FROM this.props.is_internet_connected === false &&  prevProps.is_internet_connected === true')
			// console.log("Connection type", state.type);
			// console.log("Is connected?", this.props.is_internet_connected);
		// }

		// if ( this.props.is_internet_connected === true &&  prevProps.is_internet_connected === false){
			// console.log('FROM this.props.is_internet_connected === true &&  prevProps.is_internet_connected === false')
			// console.log("Connection type", state.type);
			// console.log("Is connected?", this.props.is_internet_connected);
		// }
	}

	componentDidMount(){

		// this.unsubscribe = NetInfo.addEventListener(state => {
			// this.props.set_internet_connection( state.isConnected )
			// this.setState(prev => ({...prev, is_internet_connected: state.isConnected }));
			// console.log(state.isConnected)
			// console.log('FROM componentDidMOunt')
			// console.log("Is connected?", this.props.is_internet_connected);			
		// });

	}

	componentWillUnmount(){
		// this.unsubscribe()
	}


	render() {
		return (
			<NavigationContainer>
				<RootStack.Navigator headerMode='none'>
					{this.props.userToken !== null && this.props.isSignedIn !== false 
						? 
							( <RootStack.Screen name="SignInStack" component={SignInStack}/> )
						: 
							( <RootStack.Screen name="InnerStack" component={InnerStack} /> )
					}		
				</RootStack.Navigator>
			</NavigationContainer>
		);
	}
}

export default AppNavigation;


// class AppNavigation extends Component {
// 	constructor(props) {
// 			super(props);
// 	}
// 	render() {
// 		return (
// 			<NavigationContainer>
// 				<RootStack.Navigator headerMode='none'>
// 					{this.props.userToken !== null 
// 						? 
// 							( <RootStack.Screen name="SignIn" component={BottomTabs}/> )
// 						: 
// 							( <RootStack.Screen name="Drawer" component={TheDrawer} /> )
// 					}		
// 				</RootStack.Navigator>
// 			</NavigationContainer>
// 		);
// 	}
// }
