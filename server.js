const express = require("express");
const app = express();

const host = "0.0.0.0";
const port = 8080;

// Middleware to set required headers for SharedArrayBuffer access
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// Serve static files from the 'public' directory
app.use(express.static("."));

app.listen(port, host, () => {
  console.log(`HTTP server listening at https://${host}:${port}`);
});
