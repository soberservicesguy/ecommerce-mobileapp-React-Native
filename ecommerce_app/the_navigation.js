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
	ConnectedBulkProductCategoriesUpload,
} from "./redux_stuff/connected_components";







const Tabs = createBottomTabNavigator();

function BottomTabs({navigation}) {
	return (
		<Tabs.Navigator
			options={{ title: 'My home' }}
			// initialRouteName= 'FriendScreen'
			tabBar={() => 
				<View style={{
					display:'flex',
					flexDirection: 'row',
					alignItems:'center',
					justifyContent: 'space-around',
					height:50,
					backgroundColor: '#000000',
				}}>
					{[
						{option_name:'Bulk Blogposts', screen_name:"BulkBlogpostUpload"}, 
						{option_name:'Bulk Products',  screen_name:"BulkProductUpload"}, 
						{option_name:'Bulk Carousels',  screen_name:"BulkCarouselUpload"}, 
					].map((item, index) => {

						return (
							<TouchableOpacity activeOpacity={0.2} style={{alignItems:'center', alignSelf: 'center', justifyContent:'center',height:50, borderRightWidth:(index !== 2) ? 1 : 0, borderRightColor:'white', paddingHorizontal: 10}} onPress={ () => {
								navigation.navigate(item.screen_name)
								// navigation.navigate('Friendsection', {screen: 'FriendsScreen', params:{payload: item.screen_payload}} )
							}}>
								<Text style={{color:'white', fontWeight:'bold', fontSize:16, textAlign:'center'}}>
									{item.option_name}
								</Text>
							</TouchableOpacity>
						)
					})}
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

			<Tabs.Screen name="BulkBlogpostUpload" component={ ConnectedBulkBlogpostUpload }
				options={{ 
					headerShown:true,
					title: 'Bulk Blogposts Upload',
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Tabs.Screen name="BulkCarouselUpload" component={ ConnectedBulkCarouselUpload }
				options={{ 
					headerShown:true,
					title: 'Bulk Carousels Upload',
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Tabs.Screen name="BulkProductUpload" component={ ConnectedBulkProductUpload }
				options={{ 
					headerShown:true,
					title: 'Bulk Products Upload',
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Tabs.Screen name="BulkProductCategories" component={ ConnectedBulkProductCategoriesUpload }
				options={{ 
					headerShown:true,
					title: 'Bulk Product Categories',
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>


			{/*<Tabs.Screen 
				name="Entire Stack" 
				component={SignInStack}
				// options={{
				// 	title:'',
				// 	drawerLabel: , // function returning label
				// 	drawerIcon: ,// function returning icon
				// }} 
			/>*/}


		</Tabs.Navigator>
	)
} 















const Drawer = createDrawerNavigator();

// component returning drawer with screens
function TheDrawer({navigation}) {
	return (
		<Drawer.Navigator
			headerMode='none'
			// initialRouteName= ''
			// backBehavior= 'initialRoute / order / history / none'
			// drawerPosition= 'left / right'
			// drawerType='front / back / slide / permanent'
			hideStatusBar={false}
			drawerStyle={{ // style object for drawer
				// backgroundColor: '#eee',
				backgroundColor: 'black',
				width: 150
			}}

			drawerContent={() => {
				return(
					<ScrollView contentContainerStyle={{
						flex:1,
						alignItems:'center',
						justifyContent: 'space-between', 
					}}>
						{['Products', 'BlogPost', 'Cart', 'BulkUploadTabs'
						// 'Video'
						].map((option) => {

							let screen_name = option
							option = option.toLowerCase()
							option = option.charAt(0).toUpperCase() + option.slice(1);

							if (screen_name === 'BulkUploadTabs'){
								option = 'Bulk Upload'
							}

							return (
								<TouchableOpacity activeOpacity={0.2} onPress={ () => navigation.navigate(screen_name) } style={{marginTop:50, marginBottom:50,}}>
									<Text style={{color:'blue', fontWeight:'bold', fontSize:20}}>
										{option}
									</Text>
								</TouchableOpacity>
							)
						})}
					</ScrollView>
				)
			}}
		>

			<Drawer.Screen name="Products" component={ ConnectedProductScreen }
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Drawer.Screen name="BlogPost" component={ ConnectedBlogPostScreen }
				options={{ 
					headerShown:true,
					title: 'Blogposts',
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Drawer.Screen name="Cart" component={ ConnectedCartScreen }
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<Drawer.Screen name="BulkUploadTabs" component={ BottomTabs }
				options={{ 
					headerShown:false,
				}}
			/>


		
			{/*<Stack.Screen name="Video" component={ ConnectedCarouselScreen }
				options={{ 
					headerShown:true,
					title: 'Videos',
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
			/>*/}
		</Drawer.Navigator>
	);
}





const Stack = createStackNavigator();

function SignInStackComponent({navigation}) {
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

const InnerStack = createStackNavigator();

function InnerStackComponent({navigation}) {
	return (
		<InnerStack.Navigator
			// headerMode='none'
		>

			<InnerStack.Screen name="Content_Drawer" component={TheDrawer}
				options={{ 
					headerShown:false,
				}}
			/>


			<InnerStack.Screen name="Order" component={ ConnectedOrderScreen }
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>


			<InnerStack.Screen name="Individual_BlogPost" component={ConnectedIndividualBlogPost}
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>
		
			<InnerStack.Screen name="Individual_Video" component={ConnectedIndividualCarousel}
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<InnerStack.Screen name="Individual_Product" component={ConnectedIndividualProduct}
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<InnerStack.Screen name="IndividualCart" component={ ConnectedIndividualCartItem }
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

			<InnerStack.Screen name="IndividualOrder" component={ ConnectedIndividualOrder }
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
					// headerRight: () => (<Image source={require('./images/samosa.jpg')} style={{resizeMode: "center", height: 40, width: 40,paddingLeft: 50,}}/>),
				}}
			/>

		{/* added so that user could be pushed to login if token expired or unauthorized in backend*/}
			<InnerStack.Screen name="SignInStack" component={SignInStackComponent}
				options={{ 
					headerShown:false,
				}}
			/>


{/*			<Stack.Screen name="Fashion_Blogs" component={ConnectedBlogPostScreen}
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
			/>*/}

		</InnerStack.Navigator>
	);
}














const RootStack = createStackNavigator();


class AppNavigation extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavigationContainer>
				<RootStack.Navigator headerMode='none'>
					{this.props.isSignedIn === false || this.props.phone_number === null 
						? 
							( <RootStack.Screen name="SignInStack" component={SignInStackComponent}/> )
						: 
							( <RootStack.Screen name="InnerStack" component={InnerStackComponent} /> )
					}		
				</RootStack.Navigator>
			</NavigationContainer>
		);
	}
}

export default AppNavigation;