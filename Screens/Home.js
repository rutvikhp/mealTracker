import React from 'react';
import { connect } from 'react-redux'
import {removeFromCalendar} from '../reducers'
import { StackNavigator } from 'react-navigation';
import { TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import {
  Screen,
  Tile,
  Icon,
  Title,
  View,
  Text,
  GridRow,
  Subtitle,
  Card,
  Image
} from '@shoutem/ui'
import { Font, AppLoading } from 'expo';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      fontsAreLoaded: false,
    };
  }

  componentDidMount() {
    Font.loadAsync({
      'Rubik-Black': require('../node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('../node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('../node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('../node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('../node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('../node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('../node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    })
    .then(() => this.setState({ fontsAreLoaded: true }))
  }

  render() {
    if (!this.state.fontsAreLoaded){
      return <AppLoading />
    }
    console.log(this.props)
    const {calendar, navigation} = this.props
    const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    const mealOrder = ['breakfast', 'lunch', 'dinner']
    const cellViews = days.map((day) => {
      return (
        <GridRow columns={4} key={day}>
          <Tile style={{alignItems:'center'},{justifyContent: 'center'}}>
            <Subtitle>{day}</Subtitle>
          </Tile>
          {mealOrder.map(meal => {
            return (
              <Tile key = {meal} style={{alignItems:'center'},{justifyContent: 'center'}}>
                {
                  Object.keys(calendar[day][meal]).length ?
                  <TouchableOpacity onPress = {() => this.props.removeRecipe(day, meal)}>
                    <Image
                      styleName='small'
                      source={{uri:calendar[day][meal].image}}
                    />
                  </TouchableOpacity>
                  :
                  <Icon
                    onPress={() => navigation.navigate('AddMeal', {day, meal})}
                    name="restaurant" />
                }
                </Tile>
            )
          })}
        </GridRow>
      )
    })
    return (
      <Screen>
        <GridRow columns={4}>
          <Tile></Tile>
          {mealOrder.map(meal => {
            return (
              <Tile key={meal} style={{alignItems:'center'},{justifyContent: 'center'}}>
                <Subtitle>{meal}</Subtitle>
              </Tile>
            )
          })}
        </GridRow>
        {cellViews}
      </Screen>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    calendar: state.calendar
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    removeRecipe(day, meal){
      dispatch(removeFromCalendar({day, meal}))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
