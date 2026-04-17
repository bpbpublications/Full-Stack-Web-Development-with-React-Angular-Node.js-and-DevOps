// 03_authentication_apis/fetch_basic_auth_example.js
// Basic Authentication example with fetch(). HTTPS is required in practice.

const username = 'user';
const password = 'password';

fetch('https://api.example.com/login', {
  headers: {
    'Authorization': 'Basic ' + btoa(username + ':' + password)
  }
})
  .then(res => {
    if (!res.ok) {
      throw new Error('Login failed');
    }
    return res.json();
  })
  .then(data => {
    console.log('Login success:', data);
  })
  .catch(err => console.error('Error:', err));
