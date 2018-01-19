import React from 'react';
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native-elements'
import Home from './Screens/Home'
import AddMeal from './Screens/AddMeal'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {Screen} from '@shoutem/ui'
const MainNavigator =  StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => {
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
    screen: (props) => <AddMeal {...props} />,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Add Meal',
        headerLeft: (
          <Button
            icon = {{name: "home"}}
            onPress = {() => navigation.navigate('Home')}
          />
        )
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Screen>
          <MainNavigator />
        </Screen>
      </Provider>
    )
  }
}
