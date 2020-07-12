import { renderData } from './renderData'
import { screen, getByTestId } from '@testing-library/dom'

const generateDOM = () => {
  const app = document.createElement('div')
  app.setAttribute('data-test-id', 'app')
  app.setAttribute('class', 'app')
  app.innerHTML = `
  <nav class="nav">
  <button class="nav__hamburger" id="nav-hamburger">
    <span class="nav__line"></span>
    <span class="nav__line nav__line--center"></span>
    <span class="nav__line"></span>
  </button>
</nav>
<main class="app__content">
  <h1 class="city-name" id="city-name">Welcome</h1>
  <p class="icon-output" id="weather-icon">Q</p>
  <p class="data-value" id="icon-desc"></p>
  <p class="temperature" id="temperature">12</p>
</main>
<footer class="app__footer">
  <div class="data-box">
    n
    <p class="data-description">pressure</p>
    <p class="data-value" id="pressure">1000 hPa</p>
  </div>
  <div class="data-box">
    a
    <p class="data-description">wind</p>
    <p class="data-value" id="wind">8.2 m/s</p>
  </div>
  <div class="data-box">
    j
    <p class="data-description">humidity</p>
    <p class="data-value" id="humidity">13%</p>
  </div>
</footer>
<div class="search-menu" id="search-menu">
  <form class="search" id="search-submit">
    <h2 class="search__title">Search by city</h2>
    <label class="visually-hidden" aria-label="search"
      >Search by city</label
    >
    <p>For cities with a two-member name please use format with a hyphen eg. Bielsko-Biala</p>
    <p>For cities with same names, but different country, please use format eg. London, Ontario</p>
    <div class="search__wrapper">
      <input
        class="search__input"
        type="search"
        name="search"
        id="search-input"
        placeholder="eg. London, Ontario"
        list="autocomplete"
        required
      />
      <datalist id="autocomplete"> </datalist>
      <button class="search__submit" type="submit">Show weather</button>
    </div>
    <ul class="autocomplete-result" id="autocomplete-result"></ul>
  </form>
</div>
  `
  return app
}

describe('renderData function', () => {
  it('should render data to DOM', async () => {
    const data = {
      weather: [
        { description: 'clear sky' }
      ],
      main: { temp: 22, pressure: 1000, humidity: 77 },
      wind: { speed: 7 },
      coord: {
        lon: '12',
        lat: '33'
      },
      clouds: 'overcast',
      base: 'test',
      dt: 123123,
      sys: {},
      timezone: -12301,
      id: 11,
      name: 'Washington',
      cod: 12
    }
    const container = generateDOM()

    // const weatherIcon = document.createElement('div')
    // const cityName = document.createElement('p')
    // const iconDesc = document.createElement('p')
    // const temperature = document.createElement('p')
    // const pressure = document.createElement('p')
    // const wind = document.createElement('p')
    // const humidity = document.createElement('p')
    renderData(data)
    expect(container).toBeInTheDOM()
    //expect(app.className).toBe('app app--theme-medium')
  })
})