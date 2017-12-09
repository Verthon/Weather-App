if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser');
}

const btn = document.getElementById('location');
function success(pos){
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
navigator.geolocation.getCurrentPosition(success, error);

function outputData(data){
    //Set correct city name
    console.log(data);
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
}