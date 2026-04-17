// 02_third_party_apis/weather_fetch_browser.js
// Frontend fetch example for OpenWeatherMap, as in the book's "Frontend with Fetch" snippet.
// Replace YOUR_API_KEY with a real OpenWeatherMap key.

const city = 'London';
const apiKey = 'YOUR_API_KEY';

fetch('https://api.openweathermap.org/data/2.5/weather'
      + '?q=' + encodeURIComponent(city)
      + '&appid=' + apiKey
      + '&units=metric')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => {
    console.log('Weather Data:', data);
    // Here you could update the DOM with current temperature, etc.
  })
  .catch(err => console.error('Error:', err));
