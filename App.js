import React from 'react';
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native-elements'
import Home from './Screens/Home'
import AddMeal from './Screens/AddMeal'

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Meal Tracker',
        headerRight: (
          <Button
            icon = {{name:"shopping-cart"}}
          />
        )
      }
    }
  },
  AddMeal: {
    screen: (props)=><AddMeal {...props} />,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Add Meal',
        headerLeft: (
          <Button
            icon = {{name: "home"}}
            onPress = {()=>navigation.navigate('Home')}
          />
        )
      }
    }
  }
})
