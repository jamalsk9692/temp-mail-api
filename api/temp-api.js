// pages/api/temp-mail-ip.js

export default async function handler(req, res) {
  // Generate a random IP address
  const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;

  try {
    // Make a POST request using Fetch API
    const response = await fetch('https://mob2.temp-mail.org/mailbox', {
      method: 'POST',
      headers: {
        'User-Agent': '3.48',
        'Accept': 'application/json',
        'X-Forwarded-For': randomIP,
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
