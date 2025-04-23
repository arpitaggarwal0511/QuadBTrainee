import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('Delhi');
  const [query, setQuery] = useState('Delhi');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
        );
        const data = await response.json();
        if (data.cod === 200 || data.cod === "200") {
          setWeather(data);
        } else {
          setWeather(null);
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
        setWeather(null);
      }
      setLoading(false);
    };

    fetchWeather();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setQuery(city.trim());
    }
  };

  return (
    <div className="App" style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1>🌤️ React Weather App</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          style={{ padding: '0.5rem', width: '200px' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Get Weather
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {weather ? (
        <div style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '8px', display: 'inline-block' }}>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].main} - {weather.weather[0].description}</p>
          <p>🌡️ Temp: {(weather.main.temp - 273.15).toFixed(1)}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind: {weather.wind.speed} m/s</p>
          <p>☁️ Cloudiness: {weather.clouds.all}%</p>
          {weather.rain && <p>🌧️ Rain (last hour): {weather.rain['1h']} mm</p>}
        </div>
      ) : (
        !loading && <p>No weather data available for "{query}"</p>
      )}
    </div>
  );
}

export default App;
