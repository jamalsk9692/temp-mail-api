// pages/api/mailbox.js

import axios from 'axios';

export default async function handler(req, res) {
  // Generate random IP
  const getRandomOctet = () => Math.floor(Math.random() * 256);
  const ip = `${getRandomOctet()}.${getRandomOctet()}.${getRandomOctet()}.${getRandomOctet()}`;

  try {
    const response = await axios.post('https://mob2.temp-mail.org/mailbox', null, {
      headers: {
        'User-Agent': '3.48',
        'Accept': 'application/json',
        'X-Forwarded-For': ip,
      },
      httpsAgent: new (require('https').Agent)({
        rejectUnauthorized: false, // Disables SSL verification similar to CURLOPT_SSL_VERIFYPEER => false
      }),
    });

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
