const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: '1h' // you can change this to '30s', '7d', etc.
  });
  return token;
};

module.exports = encrypt;