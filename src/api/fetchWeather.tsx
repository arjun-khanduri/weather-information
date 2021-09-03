import axios from 'axios';

const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '43b9a28bd0b2288028c4ecdda7e21624'

export const fetchWeather = async (loc: any) => {
    const response = await axios.get(ENDPOINT, {
        params: {
            q: loc,
            units: 'metric',
            APPID: API_KEY,

        }
    });
    return response.data;
}