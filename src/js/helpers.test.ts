import { formatTemperature, setWeatherIcon, setAppTheme, toggleCSSClass, removeCSSClass, handleSearchSubmit } from './helpers'

describe('formatTemperature helper function', () => {
  it('should format temperature 12.3 to format 12°C', async () => {
    expect(formatTemperature(12.3)).toBe('12°C')
  })
})

describe('setWeatherIcon helper function', () => {
  const element = document.createElement('div')
  it('should set icon based on weather condition description provided to function', async () => {
    setWeatherIcon('clear sky', element)
    expect(element.textContent).toBe('A')
  })
  it('should set default icon (W) if weather condition description is not recognized by function', async () => {
    setWeatherIcon('unknown condition', element)
    expect(element.textContent).toBe('W')
  })
})

describe('setAppTheme helper function for setting the theme for entire app', () => {
  it('should set theme based on temperature, if its 23 or more theme = hot', async () => {
    const app = document.createElement('div')
    app.setAttribute('class', 'app')
    setAppTheme(app, 32)
    expect(app.className).toBe('app app--theme-hot')
  })
  it('should set theme based on temperature, if its 10 or low theme = cold', async () => {
    const app = document.createElement('div')
    app.setAttribute('class', 'app')
    setAppTheme(app, 5)
    expect(app.className).toBe('app app--theme-cold')
  })
})

describe('toggleCSSClass helper function', () => {
  it('should set class provided in parameter', async () => {
    const element = document.createElement('div')
    toggleCSSClass(element, 'test')
    expect(element.className).toBe('test')
  })
  it('should set class for element which already has a class', async () => {
    const element = document.createElement('div')
    element.setAttribute('class', 'test')
    toggleCSSClass(element, 'test2')
    expect(element.className).toBe('test test2')
  })
})

describe('removeCSSClass helper function', () => {
  it('should remove CSS class', async () => {
    const element = document.createElement('div')
    element.setAttribute('class', 'test test2')
    removeCSSClass(element, 'test2')
    expect(element.className).toBe('test')
  })
})

describe('handleSearchSubmit helper function', () => {
  it('should return input value if it pass the regex', async() => {
    const input = document.createElement('input')
    input.value = 'Bielsko-Biala'
    expect(handleSearchSubmit(input)).toBe(input.value)
  })
  it('should return false if value did not pass the regex', async() => {
    const input = document.createElement('input')
    input.value = ''
    expect(handleSearchSubmit(input)).toBeFalsy()
  })
})

