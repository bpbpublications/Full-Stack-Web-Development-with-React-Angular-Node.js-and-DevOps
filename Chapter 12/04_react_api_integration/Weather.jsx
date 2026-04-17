// 04_react_api_integration/Weather.jsx
// React component based on the "Following demonstrates a weather component" snippet.
// Intended for a Vite + React setup where API key is passed via Vite env.

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const city = 'Delhi';
  // In Vite, environment variables are accessed via import.meta.env
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric'
        }
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [city, apiKey]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>Loading weather...</p>;
  }

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}&deg;C</p>
      <p>Conditions: {data.weather[0].description}</p>
    </div>
  );
}

export default Weather;
