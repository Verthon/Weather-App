import {key} from './api';

export class Fetch {
  constructor(long, lat){
    this.key = "5ac9373c080767bb4adff9e5be3ee236";
    this.long = long;
    this.lat = lat;
  }
  fetchData() {
    console.log(this.key);
  }
}