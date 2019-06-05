import '../scss/style.scss';
import {Fetch} from './Fetch';
import {key} from './api';
import {renderData} from './renderData';
import {navBtn, searchMenu, search, submitBtn} from './elements';
import {toggleCSSClass} from './helpers';

class App {
  constructor(navBtn){
    this.nav = navBtn;
  }

  init(){
   document.addEventListener('DOMContentLoaded', this.getData); 
   if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser');
  }
    navigator.geolocation.getCurrentPosition(this.success, this.error);
  }

  saveWeather(){

  }

  handleNavigation(){
    
  }

  error(err){
    console.warn(`ERROR(${err.code}): ${err.message} `);
  }

  success(crd){
    Fetch.fetchDataByCoords(key, crd)
    .then(data => data.json())
    .then(json => renderData(json))
    .catch(err => this.error(err));
  }

  getData(){
    Fetch.fetchDataByCity(key)
      .then(data => data.json())
      .then(json => renderData(json))
      .catch(err => this.error(err));
  }

}

navBtn.addEventListener('click', () =>{
  toggleCSSClass(searchMenu, 'search-menu--active');
});



App.prototype.init();


