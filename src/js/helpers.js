import cities from 'cities.json'

export const formatTemperature = temperature => {
  const result = temperature.toFixed(0)
  return `${result}°C`
}

export const setWeatherIcon = (description, element) => {
  switch (description) {
    case 'broken clouds':
      element.textContent = 'D'
      break
    case 'overcast clouds':
      element.textContent = 'O'
      break
    case 'light rain':
      element.textContent = 'F'
      break
    case 'Clouds':
      element.textContent = 'C'
      break
    case 'Clear':
      element.textContent = 'A'
      break
    case 'Rain':
      element.textContent = 'X'
      break
    case 'Snow':
      element.textContent = 'W'
      break
    case 'haze':
    case 'mist':
      element.textContent = 'N'
      break
    case 'Thunderstorm':
      element.textContent = 'V'
      break
    default:
      element.textContent = 'g'
      break
  }
}

export const updateDom = (elements, data) => {
  const { cityName, iconDesc, temperature, pressure, wind, humidity } = elements
  cityName.textContent = data.name
  iconDesc.textContent = data.weather[0].description
  // Set correct temperature
  temperature.textContent = formatTemperature(data.main.temp_max)
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
