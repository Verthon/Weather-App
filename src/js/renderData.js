import { setWeatherIcon, updateDom } from './helpers'
import { elements } from './elements'

export const renderData = data => {
  setWeatherIcon(data.weather[0].main, elements.weatherIcon)
  updateDom(elements, data)
}
