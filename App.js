import React from 'react';
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native-elements'
import Home from './Screens/Home'
import AddMeal from './Screens/AddMeal'
import Cart from './Screens/Cart'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {Screen} from '@shoutem/ui'

const MainNavigator =  StackNavigator({
  Home: {
    screen: (props) => <Home {...props}/>,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Meal Tracker',
        headerRight: (
          <Button
            icon = {{name:"shopping-cart"}}
            onPress = {() => navigation.navigate('Cart')}
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
  },
  Cart: {
    screen: (props) => <Cart {...props}/>
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
