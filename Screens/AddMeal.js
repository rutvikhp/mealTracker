import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class AddMeal extends Component {

  constructor(){
    super();
    this.state = {
      eatInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt){
    console.log(evt);
    this.setState({eatInput:evt})
  }
  render(){
    const day = this.props.navigation.state.params.day
    const time = this.props.navigation.state.params.time
    return (
      <View>
        <Text>This is add meal page for {day} 's {time}</Text>
        <FormLabel>What you wanna eat??</FormLabel>
        <FormInput onChangeText={(evt)=>{this.handleChange(evt)}}/>
        <Button title = 'submit'/>
      </View>
    )
  }
}
