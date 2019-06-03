import {temperature, cityName, weatherIcon, iconDesc, wind, humidity, pressure} from './elements';
import '../scss/style.scss';
import {Fetch} from './Fetch';
import {renderData} from './renderData';
import {key} from './api';
import {changeToFarenheit, formatTemperature, toggleButton} from './helpers';

class App {
  constructor(){

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

  error(err){
    console.warn(`ERROR(${err.code}): ${err.message} `);
    this.success();
  }

  success(crd){
    Fetch.fetchDataByCoords(key, crd)
    .then(data => data.json())
    .then(json => outputData(json))
    .catch(err => this.error(err));
  }

  getData(){
    Fetch.fetchDataByCity(key)
      .then(data => data.json())
      .then(json => outputData(json))
      .catch(err => this.error(err));
  }

}

App.prototype.init();


const outputData = (data) => {

    cityName.textContent = data.name;
    //Set correct Icon
    switch(data.weather[0].description){
        case 'broken clouds':
          weatherIcon.textContent = 'D';
        break;
        case 'overcast clouds':
          weatherIcon.textContent = 'O';
        break;
        case 'light rain':
          weatherIcon.textContent = 'F';
        break;  
        case 'scattered clouds':
        case 'few clouds':
          weatherIcon.textContent = 'C';
        break;
        case 'clear sky':
          weatherIcon.textContent = 'A';
        break;
        case 'drizzle':
          weatherIcon.textContent = 'X';
        break;
        case 'Snow':
          weatherIcon.textContent = 'W';
        break;
        case 'haze':
          weatherIcon.textContent = 'N';
        break;
        default:
          weatherIcon.textContent = 'g';
        break;  
    }
    //Set description for icon
    iconDesc.textContent = data.weather[0].description;
    // Set correct temperature
    temperature.textContent = `${data.main.temp_min.toFixed(0)}°C`;
    //Set pressure, wind speed and humidity
    pressure.textContent = `${data.main.pressure} hPa`;
    wind.textContent = `${data.wind.speed} m/s`;
    humidity.textContent = `${data.main.humidity} %`;
    
    let btn = new toggleButton('unit');
      btn.addEventListener('click', () => {
        if(btn.textContent == '°F'){
          btn.textContent = `°C`;
          temperature.textContent = changeToFarenheit(data.main.temp_min);
          return;
        }
      temperature.textContent = formatTemperature(data.main.temp_min);
      btn.textContent = `°F`;     
    });
}

