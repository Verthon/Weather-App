import { ADD_CITY } from './actions'

const initialState = {
  city: 'Washington',
  theme: 'hot',
  latitude: 47.7511,
  longtitude: 120.7401
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return Object.assign({}, state, {
        city: action.city
      })
    default:
      return state
  }
}
