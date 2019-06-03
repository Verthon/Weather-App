import {key} from './api';

export class Fetch {

  constructor(long, lat){
    this.long = long;
    this.lat = lat;
  }

  static fetchDataByCoords(key, location) {
    const {latitude, longitude} = location.coords;
    return(
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`)
    );
  }

  static fetchDataByCity(key, city="Washington") {
    return(
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`)
    );  
  }
}