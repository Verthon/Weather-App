import { key } from './api'

export class Fetch {
  constructor (long, lat) {
    this.long = long
    this.lat = lat
    this.key = key
  }

  static fetchDataByCoords (key = this.key, location) {
    const { latitude, longitude } = location.coords
    return window.fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`
    )
  }

  static fetchDataByCity (key = this.key, city = 'Washington') {
    return window
      .fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
      )
      .then(res => {
        if (res.ok) {
          return res.json()
        }

        throw res
      })
  }
}
