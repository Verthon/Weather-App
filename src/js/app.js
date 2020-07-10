import '../scss/style.scss'
import { Fetch } from './Fetch'
import { key } from './api'
import { renderData } from './renderData'
import { navBtn, searchMenu, search, searchForm, autocomplete } from './elements'
import {
  toggleCSSClass,
  handleSearchSubmit,
  handleAutocomplete
} from './helpers'

class App {
  constructor (navBtn) {
    this.nav = navBtn
    this.navigatorOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 75000
    }
  }

  handleError (error) {
    console.error(error)
  }

  onNavigatorError (err) {
    console.error(`ERROR (${err.code}): ${err.message} `)
  }

  onNavigatorSuccess (crd) {
    Fetch.fetchDataByCoords(key, crd)
      .then(data => renderData(data))
      .catch(err => this.handleError(err))
  }

  getData () {
    Fetch.fetchDataByCity(key)
      .then(data => renderData(data))
      .catch(err => this.handleError(err))
  }

  getDataByCity (city) {
    Fetch.fetchDataByCity(key, city)
      .then(data => renderData(data))
      .catch(err => this.handleError(err))
  }

  init () {
    document.addEventListener('DOMContentLoaded', this.getData)
    if (!navigator.geolocation) {
      window.alert('Geolocation is not supported by your browser')
    }
    console.log(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      this.onNavigatorSuccess,
      this.onNavigatorError,
      this.navigatorOptions
    )
  }
}

navBtn.addEventListener('click', () => {
  toggleCSSClass(searchMenu, 'search-menu--active')
})

search.addEventListener('keyup', e => {
  handleAutocomplete(e, autocomplete)
})

searchForm.addEventListener('submit', e => {
  e.preventDefault()
  const result = handleSearchSubmit(e, search)
  toggleCSSClass(searchMenu, 'search-menu--active')
  App.prototype.getDataByCity(result)
  searchForm.reset()
})

App.prototype.init()
