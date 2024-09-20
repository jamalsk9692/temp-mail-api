// pages/api/temp-mail-messages.js

export default async function handler(req, res) {

  // Get the token from the request body
  const { token } = req.body;

  // Generate a random IP address
  const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;

  try {
    // Make a GET request using Fetch API
    const response = await fetch('https://mob2.temp-mail.org/messages', {
      method: 'GET',
      headers: {
        'User-Agent': '3.48',
        'Accept': 'application/json',
        'authorization': token,  // Use the token from the request body
        'X-Forwarded-For': randomIP,  // Include the random IP address in the header
      },
    });

    // Parse the response to JSON
    const data = await response.json();

    // Send the response back as JSON
    res.status(200).json(data);
  } catch {
    // Handle errors and send an error message as the response
    res.status(500).json(data);
  }
}
