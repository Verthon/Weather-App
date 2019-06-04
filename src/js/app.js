import '../scss/style.scss';
import {Fetch} from './Fetch';
import {key} from './api';
import {renderData} from './renderData';

class App {

  init(){
   document.addEventListener('DOMContentLoaded', this.getData); 
   if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser');
  }
    navigator.geolocation.getCurrentPosition(this.success, this.error);
  }

  saveWeather(){

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

App.prototype.init();


