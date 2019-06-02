import {key} from './api';

export class Fetch {

  constructor(long, lat){
    this.long = long;
    this.lat = lat;
    this.fetchData(key, "Melbourne");
  }

  static fetchData(key, city="Washington") {
    return(
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`)
    );  
  }
}