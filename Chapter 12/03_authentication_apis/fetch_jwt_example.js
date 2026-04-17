// 03_authentication_apis/fetch_jwt_example.js
// Using a JWT Bearer token with fetch(), as in the "Bearer Tokens (JWT)" snippet.

const token = 'YOUR_JWT_TOKEN';

fetch('https://api.example.com/profile', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
})
  .then(res => {
    if (!res.ok) {
      throw new Error('Failed to load profile');
    }
    return res.json();
  })
  .then(profile => {
    console.log('Profile:', profile);
  })
  .catch(err => console.error('Error:', err));
