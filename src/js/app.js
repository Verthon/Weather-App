import {temperature, cityName, weatherIcon, iconDesc, wind, humidity, cPressure} from './elements';
import '../scss/style.scss';
import {Fetch} from './Fetch';
if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser');
}
navigator.geolocation.getCurrentPosition(success, error);

console.log(Fetch.prototype.fetchData());

class App {
  constructor(){

  }

  saveWeather(){

  }
}

function success(pos){
  console.log(pos);
  //Fetch one
  let crd = pos.coords;
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  const url = `${proxy}https://fcc-weather-api.glitch.me/api/current?lat=${crd.latitude}&lon=${crd.longitude}`;

  const fetchData = () => {
    fetch(url)
    .then(data => data.json())
    .then(data => outputData(data))
  }
  fetchData();
}


function error(err){
  console.warn(`ERROR(${err.code}): ${err.message} `)
}


function outputData(data){
    //Set correct city name
    console.log(data);
    cityName.textContent = data.name;
    //Set correct Icon
    switch(data.weather[0].main){
        case 'Clouds':
        weatherIcon.textContent = 'D';
        break;
        case 'Rain':
        weatherIcon.textContent = 'a';
        break;
        case 'Clear':
        weatherIcon.textContent = 'A';
        break;
        case 'Snow':
        weatherIcon.textContent = 'W';
        break;
        default:
        weatherIcon.textContent = 'g';
    }
    //Set description for icon
    iconDesc.textContent = data.weather[0].description;
    // Set correct temperature
    temperature.textContent = `${data.main.temp_min.toFixed(0)}°C`;
    //Set pressure, wind speed and humidity
    pressure.textContent = `${data.main.pressure} hPa`;
    wind.textContent = `${data.wind.speed} m/s`;
    humidity.textContent = `${data.main.humidity} %`;

    function toggleButton(name){
      this.element = document.getElementById(name);
      return this.element;
    }
    
    let btn = new toggleButton('unit');
      btn.addEventListener('click', function(){
        if(btn.textContent == '°F'){
          btn.textContent = `°C`
          temperature.textContent = `${(data.main.temp_min*1.8 + 32).toFixed(0)}°F`;
          return;
        }
      temperature.textContent = `${data.main.temp_min.toFixed(0)}°C`;
      btn.textContent = `°F`;     
    });
}

