// Function to generate random IP
function generateRandomIP() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

// Request options
const options = {
  method: 'POST',
  headers: {
    'User-Agent': '3.48',
    'Accept': 'application/json',
    'X-Forwarded-For': generateRandomIP(),
  }
};

// Make the request using fetch
fetch('https://mob2.temp-mail.org/mailbox', options)
  .then(response => response.json())
  .then(data => {
    console.log(JSON.stringify(data)); // Output the response in JSON format
  })
  .catch(error => console.error('Error:', error));

