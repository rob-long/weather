import axios from 'axios';

const API_KEY = '03cf6f1f5c0e911cc8ddfc2f26fad028';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //console.log(request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}