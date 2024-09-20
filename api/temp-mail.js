const randomIp = () => {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
};

const fetchData = async () => {
  const response = await fetch('https://mob2.temp-mail.org/mailbox', {
    method: 'POST',
    headers: {
      'User-Agent': '3.48',
      'Accept': 'application/json',
      'X-Forwarded-For': randomIp(),
    }
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.error('Error:', response.statusText);
  }
};

fetchData();
