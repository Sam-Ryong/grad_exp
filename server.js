const express = require("express");
const cors = require("cors");
const app = express();

const host = "0.0.0.0";
const port = 80;

const corsOptions = {
  origin: "http://localhost:3000", // 허용할 도메인
  methods: "GET,POST", // 허용할 HTTP 메소드
  allowedHeaders: "Content-Type", // 허용할 헤더
};

app.use(cors());

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
