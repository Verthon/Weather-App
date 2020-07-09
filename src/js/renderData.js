import { setWeatherIcon, updateDom, setAppTheme } from './helpers'
import { elements } from './elements'

export const renderData = data => {
  const temperature = data.main.temp
  setWeatherIcon(data.weather[0].main, elements.weatherIcon)
  console.log('data of renderData func', temperature)
  setAppTheme(elements.app, temperature)
  updateDom(elements, data)
}
