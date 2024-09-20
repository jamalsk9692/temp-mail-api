// pages/api/temp-mail-otp.js

export default async function handler(req, res) {
  // Get the token from the query string
  const { token } = req.query;

  // Check if the token is provided
  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  // Generate a random IP address
  const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;

  try {
    console.log(`Received token: ${token}`);

    // Make a GET request to the third-party API
    const response = await fetch('https://mob2.temp-mail.org/messages', {
      method: 'GET',
      headers: {
        'User-Agent': '3.48',
        'Accept': 'application/json',
        'authorization': token,
        'X-Forwarded-For': randomIP,
      },
    });

    // Parse the response as JSON
    const data = await response.json();

    // Send the JSON data back to the client
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(data);
  }
}
