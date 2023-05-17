const express = require('express');
const app = express();

app.get('/random-number', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const response = { number: randomNumber };
  res.json(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});const http = require('http');

const resultDiv = document.getElementById('result');

fetch('your-api-url')
  .then(response => response.json())
  .then(data => {
    // Process the JSON response
    resultDiv.innerText = `Random Number: ${data.number}`;
  })
  .catch(error => {
    // Handle any errors
    resultDiv.innerText = 'Error fetching data.';
    console.error(error);
  });
  