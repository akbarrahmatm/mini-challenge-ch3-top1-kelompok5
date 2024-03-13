// Core Package => Built in node js
const http = require("http");
const fs = require("fs");
const path = require("path");

// Third Party Package
const url = require("url");

const PUBLIC_DIR = path.join(__dirname, "../public");
const PORT = 8000;

const server = (req, res) => {
  if (req.url === "/") {
    // localhost:8000/
    res.end("Halaman utama");
  } else if (req.url === "/about-us") {
    // localhost:8000/about-us
    res.end("Halaman about us");
  } else if (req.url === "/contact-us") {
    // localhost:8000/contact-us
    res.end("Halaman contact us");
  } else {
    res.end("404 - Halaman tidak ditemukan");
  }

  const parseURL = url.parse(req.url);
  const pathName = `${parseURL.pathname}`;
  const extension = path.parse(pathName).ext;
  const absolutePath = path.join(PUBLIC_DIR, pathName);

  const contentTypes = {
    ".css": "text/css",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".html": "text/html",
    ".js": "text/javascript",
  };

  fs.readFile(absolutePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("File not found ...");
    } else {
      res.setHeader("Content-Type", contentTypes[extension] || "text/plain");
      res.end(data);
    }
  });
};

http.createServer(server).listen(PORT);
console.log(`Server is running ... PORT : localhost:${PORT}`);
