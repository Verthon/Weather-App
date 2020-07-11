import '../scss/style.scss'
import { Fetch } from './Fetch'
import { key } from './api'
import { renderData } from './renderData'
import {
  navBtn,
  searchMenu,
  search,
  searchForm,
  autocomplete
} from './elements'
import {
  toggleCSSClass,
  setCSSClass,
  removeCSSClass,
  handleSearchSubmit,
} from './helpers'

class App {
  navigatorOptions: { enableHighAccuracy: boolean; timeout: number; maximumAge: number }
  nav: HTMLElement
  error: any
  navigatorError: { code: any; message: any }
  constructor () {
    this.nav = navBtn
    this.navigatorOptions = {
      enableHighAccuracy: true,
      timeout: 7000,
      maximumAge: 75000
    }
    this.error = null
    this.navigatorError = {
      code: null,
      message: null
    }
  }

  get currentError () {
    return this.error
  }

  handleError (error: any) {
    this.error = error
    //handle with UI and reset
    this.error = null
  }

  onNavigatorError (error: any) {
    this.navigatorError = error
    console.error(`ERROR (${error.code}): ${error.message} `)
  }

  onNavigatorSuccess (crd: any) {
    Fetch.fetchDataByCoords(key, crd)
      .then(data => renderData(data))
      .catch(err => this.handleError(err))
  }

  getData () {
    Fetch.fetchDataByCity(key)
      .then(data => renderData(data))
      .catch(err => this.handleError(err))
  }

  getDataByCity (city: string) {
    Fetch.fetchDataByCity(key, city)
      .then(data => renderData(data))
      .catch(err => this.handleError(err))
  }

  handleSubmit (e: any) {
    e.preventDefault()
    const result = handleSearchSubmit(search)
    if (result && this.error === null) {
      this.getDataByCity(result)
      toggleCSSClass(searchMenu, 'search-menu--active')
      searchForm.reset()
      removeCSSClass(search, 'search__input--error')
      return true
    }
    setCSSClass(search, 'search__input--error')
  }

  init () {
    document.addEventListener('DOMContentLoaded', this.getData)
    if (!navigator.geolocation) {
      window.alert('Geolocation is not supported by your browser')
    }
    navigator.geolocation.getCurrentPosition(
      this.onNavigatorSuccess,
      this.onNavigatorError,
      this.navigatorOptions
    )
    searchForm.addEventListener('submit', (e:any) => this.handleSubmit(e))
  }
}

navBtn.addEventListener('click', () => {
  toggleCSSClass(searchMenu, 'search-menu--active')
})

const appInstance = new App()
appInstance.init()
