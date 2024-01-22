const express = require('express');
const app = express();

// Sample data for demonstration purposes
const totalSupply = 1000000;
let livePrice = 10.50;

// Endpoint for total supply
app.get('/api/total-supply', (req, res) => {
  res.json(totalSupply); // Sending only the numeric value
});

// Endpoint for live price
app.get('/api/live-price', (req, res) => {
  res.json({ livePrice });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
