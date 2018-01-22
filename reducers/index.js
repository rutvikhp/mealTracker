import { combineReducers } from 'redux'

const ADD_RECIPE = 'ADD_RECIPE'
const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

const initialCalendarState = {
  sunday: {
    breakfast: {},
    lunch: {},
    dinner: {},
  },
  monday: {
    breakfast: {},
    lunch: {},
    dinner: {},
  },
  tuesday: {
    breakfast: {},
    lunch: {},
    dinner: {},
  },
  wednesday: {
    breakfast: {},
    lunch: {},
    dinner: {},
  },
  thursday: {
    breakfast: {},
    lunch: {},
    dinner: {},
  },
  friday: {
    breakfast: {},
    lunch: {},
    dinner: {},
  },
  saturday: {
    breakfast: {},
    lunch: {},
    dinner: {},
  },
}

export function addRecipe ({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal,
  }
}

export function removeFromCalendar ({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal,
  }
}

function calendar (state = initialCalendarState, action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    case ADD_RECIPE :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe,
        }
      }
    case REMOVE_FROM_CALENDAR :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: {},
        }
      }
    default :
      return state
  }
}

export default combineReducers({
  calendar,
})
