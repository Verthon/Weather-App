//import {outputData} from 'helpers';
//import * from 'elements';

if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser');
}
navigator.geolocation.getCurrentPosition(success, error);


function success(pos){

  //Fetch one
  // const arr = [];

  // crd = {
  //   latitude: 11,
  //   longitude: 22,
  // }

  // const url = `https://fcc-weather-api.glitch.me/api/current?lat=${crd.latitude}&lon=${crd.longitude}`;
  // fetch(url)
  //   .then(data => data.json())
  //   .then(data => outputData(data))

  // const outputData = (data) => {
  //   console.log(data);
  // }

  //working one
    function reqListener(){
        //by default it response as XMLresponse, so idea is to parse it to JSON
        let response = JSON.parse(this.responseText);
        //now i can access everything from json format
        outputData(response);
    }
    let crd = pos.coords;
    let request = new XMLHttpRequest;
    request.addEventListener('load', reqListener);
    request.open('GET', `https://fcc-weather-api.glitch.me/api/current?lat=${crd.latitude}&lon=${crd.longitude}`);
    request.responseType = 'text';
    request.send();
}



function error(err){
    console.warn(`ERROR(${err.code}): ${err.message} `)
}


function outputData(data){
    //Set correct city name
    const cityName = document.getElementById('city-name');
    cityName.innerText = data.name;
    //Set correct Icon
    const weatherIcon = document.getElementById('weather-icon');
    switch(data.weather[0].main){
        case 'Clouds':
        weatherIcon.innerText = 'D';
        break;
        case 'Rain':
        weatherIcon.innerText = 'a';
        break;
        case 'Clear':
        weatherIcon.innerText = 'A';
        break;
        case 'Snow':
        weatherIcon.innerText = 'W';
        break;
        default:
        weatherIcon.innerText = 'g';
    }
    //Set description for icon
    const iconDesc = document.getElementById('icon-desc');
    iconDesc.innerText = data.weather[0].description;
    // Set correct temperature
    const temperature = document.getElementById('temperature');
    temperature.innerText = `${data.main.temp_min} C`;
    //Set pressure, wind speed and humidity
    const cPressure = document.getElementById('pressure');
    pressure.innerText = `${data.main.pressure} hPa`;
    const wind = document.getElementById('wind');
    wind.innerText = `${data.wind.speed} m/s`;
    const humidity = document.getElementById('humidity');
    humidity.innerText = `${data.main.humidity} %`;

    function toggleButton(name){
      this.element = document.getElementById(name);
      return this.element;
    }
    
    let btn = new toggleButton('unit');
      btn.addEventListener('click', function(){
        if(btn.innerText == '°F'){
          btn.innerText = `°C`
          temperature.innerText = `${(data.main.temp_min*1.8 + 32).toFixed(0)}°F`;
          return;
        }
      temperature.innerText = `${data.main.temp_min.toFixed(0)}°C`;
      btn.innerText = `°F`;     
    });
}

