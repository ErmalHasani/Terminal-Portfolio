const express = require("express");
const app = express();
const port = 5500;

// Define rate limit settings
const rateLimitWindowMs = 1000; // 1 second
const rateLimitMaxRequests = 5; // Limit each IP to 5 requests per second
const requestHistory = new Map(); // Store request history

// Middleware for rate limiting
app.use((req, res, next) => {
  const clientIP = req.ip; // Get the client's IP address

  // Check if the client IP has made too many requests within the time window
  if (requestHistory.has(clientIP)) {
    const requests = requestHistory.get(clientIP);
    const currentTime = Date.now();

    // Remove requests that are older than the rate limit window
    while (requests.length > 0 && currentTime - requests[0] > rateLimitWindowMs) {
      requests.shift();
    }

    // Check if the remaining requests exceed the rate limit
    if (requests.length >= rateLimitMaxRequests) {
      return res.status(429).send("Rate limit exceeded. Try again later.");
    }
  }

  // Add the current request timestamp to the request history
  if (!requestHistory.has(clientIP)) {
    requestHistory.set(clientIP, []);
  }
  requestHistory.get(clientIP).push(Date.now());

  next(); // Continue processing the request
});

// Your route handling code goes here
app.get("/", (req, res) => res.send("Hello, rate-limited world!"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
