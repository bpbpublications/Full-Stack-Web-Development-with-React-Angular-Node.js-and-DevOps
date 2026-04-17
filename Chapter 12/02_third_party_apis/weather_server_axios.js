// 02_third_party_apis/weather_server_axios.js
// Node + Express backend that calls a third-party weather API using Axios.
// This represents the "backend integration" style from the chapter.

require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api/weather', async (req, res) => {
  const city = req.query.city || 'Delhi';
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'OPENWEATHER_API_KEY is not set' });
  }

  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric'
        }
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error('Weather API error:', err.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Weather backend listening on port ${PORT}`);
});
