
export const formatTemperature = (temperature) => {
  const result = temperature.toFixed(0);
  return `${result}°C`
}

export const setWeatherIcon = (description, element) => {
  switch(description){
    case 'broken clouds':
      element.textContent = 'D';
    break;
    case 'overcast clouds':
      element.textContent = 'O';
    break;
    case 'light rain':
      element.textContent = 'F';
    break;  
    case 'scattered clouds':
    case 'few clouds':
      element.textContent = 'C';
    break;
    case 'clear sky':
      element.textContent = 'A';
    break;
    case 'drizzle':
      element.textContent = 'X';
    break;
    case 'Snow':
      element.textContent = 'W';
    break;
    case 'haze':
    case 'mist':
      element.textContent = 'N';
    break;
    default:
      element.textContent = 'g';
    break;  
  }
}

export const updateDom = (elements, data) => {
    const {cityName, iconDesc, temperature, pressure, wind, humidity} = elements;
    cityName.textContent = data.name;
    iconDesc.textContent = data.weather[0].description;
    // Set correct temperature
    temperature.textContent = formatTemperature(data.main.temp_max);
    //Set pressure, wind speed and humidity
    pressure.textContent = `${data.main.pressure} hPa`;
    wind.textContent = `${data.wind.speed} m/s`;
    humidity.textContent = `${data.main.humidity} %`;
}

export const toggleCSSClass = (element, className) => {
  element.classList.toggle(className);
}

export const handleSearchSubmit = (e, element) => {
  e.preventDefault();
  console.log(element.value);
}