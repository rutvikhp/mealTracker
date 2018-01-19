import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet} from 'react-native';
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
  Card
} from '@shoutem/ui'
import { Font, AppLoading } from 'expo';

export default class Home extends React.Component {
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
    .then(()=>this.setState({ fontsAreLoaded: true }))
  }
  render() {
    if(!this.state.fontsAreLoaded){
      return <AppLoading />
    }

    const rowData = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const cellViews = rowData.map((day) => {
      return (
        <GridRow columns={4} key={day}>
          <Tile style={{alignItems:'center'},{justifyContent: 'center'}}>
            <Subtitle>{day}</Subtitle>
          </Tile>
          <Tile style={{alignItems:'center'},{justifyContent: 'center'}}>
            <Icon
              onPress={()=>this.props.navigation.navigate('AddMeal', {day: day, time: 'breakfast'})}
              name="restaurant" />
          </Tile>
          <Tile style={{alignItems:'center'},{justifyContent: 'center'}}>
            <Icon
              onPress={()=>this.props.navigation.navigate('AddMeal', {day: day, time: 'Lunch'})}
              name="restaurant"/>
          </Tile>
          <Tile style={{alignItems:'center'},{justifyContent: 'center'}}>
            <Icon
              onPress = {() => this.props.navigation.navigate('AddMeal', {day: day, time: 'Dinner'})}
            name="restaurant"/>
          </Tile>
        </GridRow>
      )
    })
    return (
      <Screen>
        <GridRow columns={4}>
          <Tile style={{alignItems:'center'},{justifyContent: 'center'}}>
            <Subtitle>Day</Subtitle>
          </Tile>
          <Tile style={{alignItems:'center'},{justifyContent: 'center'}}>
            <Subtitle>Breakfast</Subtitle>
          </Tile>
          <Tile style={{alignItems:'center'},{justifyContent: 'center'}}>
            <Subtitle>Lunch</Subtitle>
          </Tile>
          <Tile style={{alignItems:'center'},{justifyContent: 'center'}}>
            <Subtitle>Dinner</Subtitle>
          </Tile>
        </GridRow>
        {cellViews}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
