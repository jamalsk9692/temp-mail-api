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
        'X-Forwarded-For': randomIP,  // Include the random IP address in the header
      },
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Failed to fetch data from the external API');
    }

    // Parse the response as text
    const data = await response.text();  // If response is JSON, use response.json()

    // Send the response back to the client
    res.status(200).json({ response: data });
  } catch (error) {
    // Handle errors and send a response
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
}
