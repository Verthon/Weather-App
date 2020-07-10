import cities from 'cities.json'

export const formatTemperature = temperature => {
  const result = temperature.toFixed(0)
  return `${result}°C`
}

export const setWeatherIcon = (description, element) => {
  console.log('description', description)
  switch (description) {
    case 'broken clouds':
      element.textContent = 'D'
      break
    case 'overcast clouds':
      element.textContent = 'P'
      break
    case 'few clouds':
    case 'scattered clouds':
      element.textContent = 'C'
      break
    case 'light rain':
      element.textContent = 'R'
      break
    case 'heavy intensity rain':
      element.textContent = 'X'
      break
    case 'Clouds':
      element.textContent = 'C'
      break
    case 'clear sky':
      element.textContent = 'A'
      break
    case 'Snow':
      element.textContent = 'W'
      break
    case 'haze':
    case 'mist':
      element.textContent = 'G'
      break
    case 'fog':
      element.textContent = 'G'
      break
    case 'thunderstorm':
      element.textContent = 'T'
      break
    default:
      element.textContent = 'W'
      break
  }
}

export const setAppTheme = (app, temperature) => {
  const dataElements = Array.from(document.querySelectorAll('.data-value'))
  if (temperature > 23) {
    app.setAttribute('class', 'app app--theme-hot')
    dataElements.forEach(element => {
      element.setAttribute('class', 'data-value data-value--theme-hot')
    })
    return true
  }
  if (temperature > 10) {
    app.setAttribute('class', 'app app--theme-medium')
    dataElements.forEach(element => {
      element.setAttribute('class', 'data-value data-value--theme-medium')
    })
    return true
  }
  app.setAttribute('class', 'app app--theme-cold')
  dataElements.forEach(element => {
    element.setAttribute('class', 'data-value data-value--theme-cold')
  })
  return true
}

export const updateDom = (elements, data) => {
  const { cityName, iconDesc, temperature, pressure, wind, humidity } = elements
  cityName.textContent = data.name
  iconDesc.textContent = data.weather[0].description
  temperature.textContent = formatTemperature(data.main.temp)
  pressure.textContent = `${data.main.pressure} hPa`
  wind.textContent = `${data.wind.speed} m/s`
  humidity.textContent = `${data.main.humidity} %`
}

export const toggleCSSClass = (element, className) => {
  element.classList.toggle(className)
}

export const setCSSClass = (elem, className) => {
  elem.classList.add(className)
}

export const createElem = (tag, parent, quantity) => {
  const elements = []
  const fragment = document.createDocumentFragment()
  quantity.forEach(element => {})

  parent.appendChild(element)
}

export const filterCities = (data, input) => {}

export const addTextContent = (element, text) => {
  element.textContent = text
}

export const handleAutocomplete = (e, element) => {
  const input = e.target.value
  if (input.length >= 3) {
    filterCities(cities, input)
  }
}

export const handleSearchSubmit = (e, element) => {
  e.preventDefault()
  return element.value
}
