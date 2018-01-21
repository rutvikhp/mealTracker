import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {addRecipe} from '../reducers'
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { FormLabel, FormInput, Button, Tile } from 'react-native-elements'
import {connect} from 'react-redux'
import {Screen, Image, GridRow, Divider} from '@shoutem/ui'
class AddMeal extends Component {

  constructor(){
    super();
    this.state = {
      eatInput: '',
      foodReveiced: false,
      recipies: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt){
    this.setState({eatInput:evt})
  }
  handleSubmit(){
    const foodLabel = this.state.eatInput.trim()
    const API_ID = '9615eae5'
    const API_KEY = '7ced2c5e4c75afa5b5de858efc745ccb'
    return fetch(`https://api.edamam.com/search?q=${foodLabel}&app_id=${API_ID}&app_key=${API_KEY}`)
    .then(results => results.json())
    .then(({hits}) => {
      const recipies = hits.map(hit => hit.recipe)
      this.setState({
        recipies: recipies,
        foodReveiced: true
      })}
  )}
  render(){
    const day = this.props.navigation.state.params.day
    const time = this.props.navigation.state.params.meal
    const recipies = this.state.recipies
    return (
      <Screen>
        <ScrollView>
        <Text>This is add meal page for {day} 's {time}</Text>
        <FormLabel>What you wanna eat??</FormLabel>
        <FormInput onChangeText={(evt)=>{this.handleChange(evt)}} />
        <Button title = 'submit' onPress = {this.handleSubmit} />
        <Divider />
        {
          this.state.foodReveiced &&
            recipies.map((recipe, index) => {
              return (
                <View key= {index}>
                <Tile
                  onPress = {() => {this.props.addToCalender(day, recipe, time)}}
                  imageSrc={{uri: recipe.image}}
                  title={recipe.label}
                />
                <Divider /></View>
              )
            })
        }
        </ScrollView>
      </Screen>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCalender(day, recipe, meal){
      dispatch(addRecipe({day, recipe, meal}))
    }
  }
}
export default connect(null, mapDispatchToProps)(AddMeal)
