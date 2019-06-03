export const changeToFarenheit = (temperature) => {
  const result = (temperature * 1.8 + 32).toFixed(0);
  return `${result} °F`;
}

export const formatTemperature = (temperature) => {
  const result = temperature.toFixed(0);
  return `${result} °C`
}

export const toggleButton = (name) => {
  this.element = document.getElementById(name);
  return this.element;
}