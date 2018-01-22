import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux'
import {Divider, Screen} from '@shoutem/ui'

const Cart = (props) => {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const mealOrder = ['breakfast', 'lunch', 'dinner']
  const items = []
  dayOrder.map(day => {
    return mealOrder.map(meal => {
      if (Object.keys(props.calendar[day][meal]).length){
        items.push(props.calendar[day][meal].ingredientLines)
      }
    })
  })
  return (
    <Screen>
      <ScrollView>
        {items.map((ingredients, index) => {
          return (
            <View key = {index}>
            {ingredients.map((ingredient,index) => {
              return (
                <Text key = {index}>
                  {ingredient}
              </Text>
              )
            })}
            <Divider />
            </View>)
        })}
      </ScrollView>
    </Screen>
  )
}

const mapStateToProps = (state) => {
  return {
    calendar: state.calendar
  }
}

export default connect(mapStateToProps)(Cart)
