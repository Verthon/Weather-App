import {temperature, cityName, weatherIcon, iconDesc, wind, humidity, cPressure} from './elements';
import '../scss/style.scss';
import {Fetch} from './Fetch';
import {Data} from './Data';
import {key} from './api';
// if(!navigator.geolocation){
//     alert('Geolocation is not supported by your browser');
// }
// navigator.geolocation.getCurrentPosition(success, error);
class App {
  constructor(){
    this.init();
  }

  init(){
    window.addEventListener('DOMContentLoaded', this.success);
  }

  saveWeather(){

  }

  success(pos){
    let crd = pos.coords;
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    Fetch.fetchData(key)
      .then(data => data.json())
      .then(json => outputData(json))
      .catch(err => error(err));
  }

  error(err){
    console.warn(`ERROR(${err.code}): ${err.message} `);
    success();
  }

}

App.prototype.init();


const outputData = (data) => {
    console.log(data);
    console.log(window.location)
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
          btn.textContent = `°C`
          temperature.textContent = `${(data.main.temp_min*1.8 + 32).toFixed(0)}°F`;
          return;
        }
      temperature.textContent = `${data.main.temp_min.toFixed(0)}°C`;
      btn.textContent = `°F`;     
    });
}

