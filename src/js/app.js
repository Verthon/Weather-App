/* eslint-disable no-undef */
import '../scss/style.scss'
import { Fetch } from './Fetch'
import { key } from './api'
import { renderData } from './renderData'
import { store } from './store'
import {
  navBtn,
  searchMenu,
  search,
  submitBtn,
  autocomplete
} from './elements'
import {
  toggleCSSClass,
  handleSearchSubmit,
  handleAutocomplete
} from './helpers'

class App {
  constructor (navBtn) {
    this.nav = navBtn
    this.state = {
      theme: 'hot'
    }
  }

  error (err) {
    console.log(`ERROR(${err.code}): ${err.message} `)
  }

  success (crd) {
    Fetch.fetchDataByCoords(key, crd)
      .then(data => data.json())
      .then(json => renderData(json))
      .catch(err => this.error(err))
  }

  saveWeather () {}

  handleNavigation () {}

  getData () {
    Fetch.fetchDataByCity(key)
      .then(data => data.json())
      .then(json => renderData(json))
      .catch(err => this.error(err))
  }

  getDataByCity (city) {
    Fetch.fetchDataByCity(key, city)
      .then(data => data.json())
      .then(json => renderData(json))
      .catch(err => this.error(err))
  }

  init () {
    document.addEventListener('DOMContentLoaded', this.getData)
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
    }
    navigator.geolocation.getCurrentPosition(this.success, this.error)
  }
}

navBtn.addEventListener('click', () => {
  toggleCSSClass(searchMenu, 'search-menu--active')
})

search.addEventListener('keyup', e => {
  handleAutocomplete(e, autocomplete)
})

submitBtn.addEventListener('submit', e => {
  const result = handleSearchSubmit(e, search)
  toggleCSSClass(searchMenu, 'search-menu--active')
  App.prototype.getDataByCity(result)
})

App.prototype.init()
