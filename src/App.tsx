import { useState } from 'react'
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState({ main: { temp: 1000, feels_like: 1000, humidity: 0 }, name: '', weather: [{ icon: '', description: '' }], sys: { country: '' } });
    const [error, setError] = useState(false)
    const search = async (e: any) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(location).catch((err) => {
                setError(true)
            })
            if (data) {
                setWeather(data);
                setError(false);
            }
            setLocation('');
        }
    }
    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={search} />
            {weather.main.temp !== 1000 && !error && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <p>Feels Like: {weather.main.feels_like}<sup>&deg;C</sup></p>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                        <p>Humidity: {weather.main.humidity}<span>%</span></p>
                    </div>
                </div>
            )}
            {error && (
                <div className="city">
                    <div className="city-name">
                        <h2>City not found</h2>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
