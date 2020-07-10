import { setWeatherIcon, updateDom, setAppTheme } from './helpers'
import { elements } from './elements'

export const renderData = data => {
  console.log('data', data.weather[0])
  const temperature = data.main.temp
  setWeatherIcon(data.weather[0].description, elements.weatherIcon)
  setAppTheme(elements.app, temperature)
  updateDom(elements, data)
}
