const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;

const fetch = require('node-fetch');

const url = 'https://mob2.temp-mail.org/mailbox';
const options = {
  method: 'POST',
  headers: {
    'User-Agent': '3.48',
    'Accept': 'application/json',
    'X-Forwarded-For': ip,
  },
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    console.log(JSON.stringify(data));
  })
  .catch(error => {
    console.error('Error:', error);
  });

