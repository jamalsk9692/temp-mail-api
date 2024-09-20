const mo = new URLSearchParams(window.location.search).get('mo');
const pass = new URLSearchParams(window.location.search).get('pass');

const url = 'https://gateway.eci.gov.in/api/v1/authn-voter/password-flow';

const data = JSON.stringify({
    applicationName: "VHA",
    otp: "",
    password: pass,
    roleCode: "*",
    username: mo
});

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Host': 'gateway.eci.gov.in',
    'Connection': 'Keep-Alive',
    'User-Agent': 'okhttp/3.14.7'
};

fetch(url, {
    method: 'POST',
    headers: headers,
    body: data,
    credentials: 'include'
})
.then(response => response.json())
.then(json => {
    // Handle the JSON response here
})
.catch(error => {
    console.error('Error:', error);
});

