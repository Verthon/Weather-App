import * as elements from './elements';
import '../scss/style.scss';
if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser');
}
navigator.geolocation.getCurrentPosition(success, error);


function success(pos){

  //Fetch one
  let crd = pos.coords;
  const url = `https://fcc-weather-api.glitch.me/api/current?lat=${crd.latitude}&lon=${crd.longitude}`;

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
    const cityName = elements.cityName;
    cityName.textContent = data.name;
    //Set correct Icon
    const weatherIcon = document.getElementById('weather-icon');
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
    const iconDesc = document.getElementById('icon-desc');
    iconDesc.textContent = data.weather[0].description;
    // Set correct temperature
    const temperature = document.getElementById('temperature');
    temperature.textContent = `${data.main.temp_min.toFixed(0)}°C`;
    //Set pressure, wind speed and humidity
    const cPressure = document.getElementById('pressure');
    pressure.textContent = `${data.main.pressure} hPa`;
    const wind = document.getElementById('wind');
    wind.textContent = `${data.wind.speed} m/s`;
    const humidity = document.getElementById('humidity');
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

