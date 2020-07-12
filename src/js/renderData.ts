import { setWeatherIcon, updateDom, setAppTheme } from './helpers'
import { elements } from './elements'

type Data = {
  coord: {
    lon: string,
    lat: string
  },
  weather: Array<any>,
  main: any,
  wind: any, 
  clouds: any, 
  base: string, 
  dt: number, 
  sys: any,
  timezone: number,
  id: number,
  name: string,
  cod: number
}

export const renderData = (data: Data) => {
  const temperature = data.main.temp
  setWeatherIcon(data.weather[0].description, elements.weatherIcon)
  setAppTheme(elements.app, temperature)
  updateDom(elements, data)
}
