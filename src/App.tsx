import { useState } from 'react'
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState({ main: { temp: 1000 }, name: '', weather: [{icon:'', description:''}], sys: { country: '' } });

    const search = async (e: any) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(location)
            setWeather(data);
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
            {weather.main.temp !== 1000 && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
