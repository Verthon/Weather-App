export const ADD_CITY = 'ADD_CITY'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_THEME = 'UPDATE_THEME'
export const UPDATE_WEATHER = 'UPDATE_WEATHER'

export const addCity = city => {
  return {
    type: ADD_CITY,
    city
  }
}

export const updateCity = city => {
  return {
    type: UPDATE_CITY,
    city
  }
}

export const updateTheme = theme => {
  return {
    type: UPDATE_THEME,
    theme
  }
}

export const updateWeather = weather => {
  return {
    type: UPDATE_WEATHER,
    weather
  }
}
