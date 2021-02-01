import React, {Component} from 'react';
import { 
  Button,
  View, 
  Text,
  StyleSheet,
} from "react-native";


export class SomeComponent extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
      return (
        <View style={styles.container}>
          <Text style={{color:'#000000'}}>
            Working Finally {this.props.a + 12}  ?  {String(this.props.userToken)}
          </Text>
          <Button
            title="SAGA trigger"
            color="#841584"
            onPress={this.props.theAgeUp}
          />

        </View>          
      );
  }
}



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display:'flex',
    marginTop: 100,
    width: '60%',
    color:'#000000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
