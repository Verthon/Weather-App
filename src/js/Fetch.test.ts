import { Fetch } from './Fetch'
import { screen, fireEvent } from '@testing-library/dom'

const generateDOM = () => {
  const app: any = document.createElement('div')
  app.setAttribute('data-test-id', 'app')
  app.setAttribute('class', 'app')
  app.innerHTML = `
  <nav class="nav" data-testid="nav">
  <button class="nav__hamburger" data-testid="nav-hamburger">
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

describe('Fetch class tests', () => {
  it('should load data from API', async () => {
    document.body.innerHTML = generateDOM()
    screen.debug()
    const navBtn = screen.getByTestId('nav-hamburger')
    fireEvent.click(navBtn)
    expect(navBtn.className).toBe('search-menu--active')
  })
})