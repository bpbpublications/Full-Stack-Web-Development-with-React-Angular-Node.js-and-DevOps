// 06_validation_security/bcrypt_hashing.js
// Password hashing example using bcrypt, adapted from the snippet in Chapter 10.

const bcrypt = require('bcrypt');

async function hashPassword(plain) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

// Example usage if this file is run directly
if (require.main === module) {
  hashPassword('MySecret123').then(hash => {
    console.log('Hashed password:', hash);
  });
}

module.exports = { hashPassword };
