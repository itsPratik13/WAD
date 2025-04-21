const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 3000;

http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    
    let pathname =
      parsedUrl.pathname === "/" ? "/index.html" : parsedUrl.pathname;

    let filePath = path.join(__dirname, "public", pathname);
    
    let extname = path.extname(filePath).toLowerCase();
    
    let contentType = "text/html";
    switch (extname) {
      case ".html":
        contentType = "text/html";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".js":
        contentType = "application/javascript";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpeg";
        break;
      case ".jpeg":
        contentType = "image/jpeg";
        break;
      case ".gif":
        contentType = "image/gif";
        break;
      default:
        contentType = "application/octet-stream";
    }

    fs.exists(filePath, (exists) => {
      if (exists) {
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.writeHead(500);
            res.end("Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
          }
        });
      } else {
        res.writeHead(404);
        res.end("File Not Found");
      }
    });
  })
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
