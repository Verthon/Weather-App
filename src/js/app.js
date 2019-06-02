import {temperature, cityName, weatherIcon, iconDesc, wind, humidity, pressure} from './elements';
import '../scss/style.scss';
import {Fetch} from './Fetch';
import {renderData} from './renderData';
import {key} from './api';
import {changeToFarenheit} from './helpers';

class App {
  constructor(){

  }

  init(){
   if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser');
  }
  navigator.geolocation.getCurrentPosition(this.success, this.error);
  }

  saveWeather(){

  }

  success(pos){
    let crd = pos.coords;
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    Fetch.fetchData(key)
      .then(data => data.json())
      .then(json => outputData(json))
      .catch(err => this.error(err));
  }

  error(err){
    console.warn(`ERROR(${err.code}): ${err.message} `);
    this.success();
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

    function toggleButton (name) {
      this.element = document.getElementById(name);
      return this.element;
    }
    
    let btn = new toggleButton('unit');
      btn.addEventListener('click', () => {
        if(btn.textContent == '°F'){
          btn.textContent = `°C`;
          temperature.textContent = changeToFarenheit(data.main.temp_min);
          return;
        }
      temperature.textContent = `${data.main.temp_min.toFixed(0)}°C`;
      btn.textContent = `°F`;     
    });
}

