import React, { Component } from 'react';
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight,
	FlatList,
	Image,
	SafeAreaView,
	ScrollView,
} from "react-native";
import PropTypes from 'prop-types';

import axios from 'axios';

import utils from "../utilities"

// IMPORT COMPONENTS
import {
} from '../components/blogposts/';

// IMPORT CONNECTED COMPONENTS
import {
	ConnectedBlogPostCard,
	ConnectedCreateBlogPost,
} from '../redux_stuff/connected_components';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { Provider, Consumer } = React.createContext();

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class BlogPostScreen extends Component {
	constructor(props){
		super(props);
// STATE	
		this.state = {
			get_individual_image:false,			
		}	
	}

	setUpScreen(){
		let redirectToSignIn = () => this.props.navigation.navigate('SignInStack', { screen: 'Login' })
		let setIsSignedInCallback = () => this.props.set_is_signed_in( false )
		let setPhoneNumberCallback = () => this.props.set_phone_number( null )

		axios.get(utils.baseUrl + '/blogpostings/blogposts-list',)
		.then((response) => {

	    	if (response.status === 401){
				setIsSignedInCallback()
				setPhoneNumberCallback()
				redirectToSignIn()
	    	}

			if (response.data.success){

				this.props.set_fetched_blogposts(response.data.blogposts_list)
		    	this.setState({ get_individual_image: true })				

			}


		})
		.catch((error) => {
			console.log(error);
			this.props.set_fetched_blogposts([])

			// using below condition since log spits below line with 401 status code
			if (String(error).split(" ").join("") === 'Error: Request failed with status code 401'.split(" ").join("")){

				setIsSignedInCallback()
				setPhoneNumberCallback()
				redirectToSignIn()

			}

		})


	}

	componentWillUnmount() {
		this._unsubscribeFocus();
		this._unsubscribeBlur();
	}

	componentDidMount() {
		this._unsubscribeFocus = this.props.navigation.addListener('focus', () => {
			// below will be executed when user enters this screen
			console.log('screen_payload')
			console.log(this.state.screen_payload)

			this.setUpScreen()
			// const payload_from_previous_screen = this.props.navigation
			// let { id } = payload_from_previous_screen
		});

		this._unsubscribeBlur = this.props.navigation.addListener('blur', () => {
			// below will be executed when user leaves this screen
			console.log('I AM UNMOUNTED')
			console.log('I AM UNMOUNTED')
			console.log('I AM UNMOUNTED')

			// const payload_from_previous_screen = this.props.navigation
			// let { id } = payload_from_previous_screen
		});

	}


// RENDER METHOD
	render() {
			
		const total_blogposts = this.props.total_blogposts

		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

		return (
			<KeyboardAwareScrollView>

				<SafeAreaView>
					<ScrollView contentContainerStyle={styles.screenContainer}>
			  	  		<FlatList
			  				style={{flexDirection: 'column',}}
			  				numColumns={2}
			  	  			data={total_blogposts}
			  				renderItem={
			  					({ item }, index) => (
									<ConnectedBlogPostCard
										navigation={this.props.navigation}
										getIndividualImage = {this.state.get_individual_image}

										dataPayloadFromParent = { item }							
									/>
			  					)}
			  				keyExtractor={(item, index) => String(index)}
			  			/>

						<View>
				  			<ConnectedCreateBlogPost
	  			  				navigation={this.props.navigation}
				  			/>
				  		</View>

						
					</ScrollView>
				</SafeAreaView>

			</KeyboardAwareScrollView>				

		);
	}
}

BlogPostScreen.defaultProps = {
};


const styles = StyleSheet.create({
	container: {
	},
	bigBlue: {
	},					
	buttonWithoutBG:{
		marginTop:50,
		marginBottom:50,
	},
	innerText:{

	},

// scroll view
	screenContainer:{
		// flex:1,
		// display:'flex',
		alignItems: 'center', // horizontally centered
		justifyContent: 'space-between', 
	},
	somethingContainer:{
		marginTop: windowHeight * 0.05, // or 30  gap
		height: windowHeight * 0.1, // or 100
		width: '80%',
		justifyContent: 'center', // vertically centered
		alignSelf: 'center', // horizontally centered
		// backgroundColor: utils.lightGreen,
	},

});

export default BlogPostScreen