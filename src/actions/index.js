// using axios library to handle get request
import axios from 'axios';

const API_KEY = 'b38e9999c29b2824af0f489d3251d284';
// documentation from openweathermap.org
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    paylaod: request
  };
}
