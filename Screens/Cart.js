import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux'

const Cart = (props) => {
  return (
    <Text>
      {
        props.calendar.reduce((result, { meals }) => {
         const { breakfast, lunch, dinner } = meals

         breakfast && result.push(breakfast)
         lunch && result.push(lunch)
         dinner && result.push(dinner)

         return result
       }, [])
       .reduce((ings, { ingredientLines }) => ings.concat(ingredientLines), [])
     }
    </Text>
  )
}

const mapStateToProps = ({calendar, food}) => {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]]
          : null
        return meals
      }, {})
    })),
  }
}

export default connect(mapStateToProps)(Cart)
