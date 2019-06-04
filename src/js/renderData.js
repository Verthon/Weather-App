import {setWeatherIcon, updateDom} from './helpers';
import {elements} from './elements';

export const renderData = (data) => {
  //Set correct Icon
  setWeatherIcon(data.weather[0].description, elements.weatherIcon);
  //Set description for icon
  updateDom(elements, data);
}
