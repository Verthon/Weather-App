export class Fetch {

  constructor(long, lat){
    this.long = long;
    this.lat = lat;
  }

  static fetchData(key, city="Bielsko-Biała") {
    return(
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`)
    );
    
  }
}