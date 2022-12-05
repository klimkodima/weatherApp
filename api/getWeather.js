import axios from 'axios';
import Config from '../config';

const getWeather =  async (lat,lon) => {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    try {

        return  await axios.get(BASE_URL+`?lat=${lat}&lon=${lon}&units=metric&appid=${Config.WEATHER_API_KEY}&lang=en`);
    } catch (e) {
        console.log(e);
    }
};

export default getWeather;