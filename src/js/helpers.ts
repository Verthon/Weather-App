
export const formatTemperature = (temperature: number) => {
  const result = temperature.toFixed(0)
  return `${result}°C`
}

export const setWeatherIcon = (description: string, element: HTMLElement) => {
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
    case 'clear sky':
      element.textContent = 'A'
      break
    case 'snow':
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

export const setAppTheme = (app: HTMLElement, temperature: number) => {
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

export const updateDom = (elements: any, data: any) => {
  const { cityName, iconDesc, temperature, pressure, wind, humidity } = elements
  cityName.textContent = data.name
  iconDesc.textContent = data.weather[0].description
  temperature.textContent = formatTemperature(data.main.temp)
  pressure.textContent = `${data.main.pressure} hPa`
  wind.textContent = `${data.wind.speed} m/s`
  humidity.textContent = `${data.main.humidity} %`
}

export const toggleCSSClass = (element: HTMLElement, className: string) => {
  element.classList.toggle(className)
}

export const removeCSSClass = (element: HTMLElement, className: string) => {
  element.classList.remove(className)
}

export const setCSSClass = (elem: HTMLElement, className: string) => {
  elem.classList.add(className)
}

export const addTextContent = (element: HTMLElement, text: string) => {
  element.textContent = text
}

export const handleSearchSubmit = (searchInput: HTMLInputElement) => {
  const regex = new RegExp('^[a-z-A-Z-]+$', 'gm')
  if (regex.test(searchInput.value) && searchInput.value.length >= 2) {
    return searchInput.value
  }
  return false
}
