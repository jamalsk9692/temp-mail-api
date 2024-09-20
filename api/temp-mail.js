// pages/api/temp-mail.js

export default async function handler(req, res) {
  try {
    // Use the Fetch API to make the request
    const response = await fetch('https://mob2.temp-mail.org/mailbox', {
      method: 'POST',
      headers: {
        'User-Agent': '3.48',
        'Accept': 'application/json',
      },
    });

    // Parse the response to JSON
    const data = await response.json();

    // Send the response back as JSON
    res.status(200).json(data);
  } catch {
    res.status(500).json(data);
  }
}

