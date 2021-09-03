import React, { useState } from 'react'
import { fetchWeather } from './api/fetchWeather';

const App = () => {
    const [location, setLocation] = useState('');
    const search = async (e: any) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(location)
            console.log(data)
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
        </div>
    )
}

export default App
