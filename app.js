const apiKey = 'cef9368623ad0361da925b4cc873a247';
if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser');
}

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0

};
function success(pos){
    let crds = pos.coords;
    console.log('Your current position is: ');
    console.log(`Latitude : ${crds.latitude}`);
    console.log(`Latitude : ${crds.longitude}`);
    console.log(`More or less : ${crds.accuracy}`);
}
function error(err){
    console.warn(`ERROR(${err.code}): ${err.message} `)
}
navigator.geolocation.getCurrentPosition(success, error, options);
function show(){
    console.log(this.responseText);
    console.log(this);
    const wIcon = document.getElementById('weather-icon');
    //wIcon.setAttribute(`src`, `${this.weather[3].icon}`);
}
const endpoint = 'https://fcc-weather-api.glitch.me/';
let httpRequest = new XMLHttpRequest();
httpRequest.addEventListener('load', show);
let lat1 = 49.8;
let lon2 = 19.1;
httpRequest.open('GET', `https://fcc-weather-api.glitch.me/api/current?lat=${lat1}&lon=${lon2}`);
httpRequest.send();
