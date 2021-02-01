import React, {Component} from 'react';
// IMPORT classes to use
import { 
  ImageBackground,
  View, 
  // Button,
  // Text,
  // TouchableOpacity,
  // TouchableHighlight,
} from "react-native";
// IMPORT components without store / redux
import {
  RoundedButtonTouchableOpacity,
  TextInputFields,
  HeadingOrText,
  TextWithTouchableHighlight,
  Gap,
  ButtonTouchableOpacity,
  ButtonTouchableHighlight
} from "../components/index";
// IMPORT connected components
// import {ConnectedSomeComponent} from "../redux_stuff/connected_components";


export default class CreateScreen extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <ImageBackground
        // source={require('../images/samosa.jpg')}
        style={{
          resizeMode:"stretch",
          width:'100%',
          height:'100%'
        }}
      >        
        <Gap height={10} />
        
        <RoundedButtonTouchableOpacity 
          height={40}
          width={'80%'}
          fontSize={15}
          labelAlign='center'
          radius={25}
        />

        <Gap height={10} />
        
        <HeadingOrText
          text={'FASHION'}
          fontSize={30}
          backgroundColor='inherit'
          height={40}
          textAlign={'center'}
          fontStyle={'normal'}
          letterSpacing={5}
        />
        <HeadingOrText
          text={'SUPPLY'}
          fontWeight={'normal'}
          fontSize={27}
          backgroundColor='inherit'
          height={45}
          textAlign={'center'}
          fontStyle={'normal'}
          letterSpacing={10}
        />

        <Gap height={10} />
        
        <TextWithTouchableHighlight 
          text= {'Already have an account?'}
          height= {30}
          horizontalAlign= {'center'}
          height= {50}
        />

        <Gap height={10} />
        
        <View style={{
          width:'80%',
          alignSelf: 'center' 
          }} 
        >
          <HeadingOrText
            text={'EMAIL ADDRESS'}
            width={'60%'}
            paddingLeft={0}
            horizontalAlign='flex-start'
            fontWeight={'bold'}
            fontSize={15}
            backgroundColor='inherit'
            height={45}
            textAlign={'left'}
            fontStyle={'normal'}
            letterSpacing={1}
          />
          <TextInputFields
            borderColor={'#e2e4e8'}
            borderWidth={2}
            paddingLeft={10}
            backgroundColor={'inherit'}
          />
        </View>

        <Gap height={10} />
        
        <ButtonTouchableOpacity 
          imageSource={require('../images/samosa.jpg')}
          label={'Click meeeee'}
          gapFlexValue={2}
          textFlexGrow={2}
          backgroundColor={'#e2e4e8'}
        />

        <Gap height={10} />

        <ButtonTouchableHighlight
          imageSource={require('../images/samosa.jpg')}
          label={'Click meeeee'}
          gapFlexValue={2}
          textFlexGrow={2}
          backgroundColor={'#e2e4e8'}
        />
      </ImageBackground>
    );
  }
}