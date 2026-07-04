const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;
const ROOT = path.join(__dirname, "dist");
const MIME = {
  ".html": "text/html;charset=utf-8", ".js": "application/javascript",
  ".css": "text/css;charset=utf-8", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".gif": "image/gif", ".mp4": "video/mp4",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".json": "application/json",
  ".JPG": "image/jpeg", ".GIF": "image/gif"
};

http.createServer((req, res) => {
  let url = req.url.split("?")[0];
  if (url === "/") url = "/index.html";
  const fp = path.join(ROOT, url);
  if (!fp.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  try {
    const ext = path.extname(fp);
    const content = fs.readFileSync(fp);
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*"
    });
    res.end(content);
  } catch(e) {
    res.writeHead(404);
    res.end("Not Found: " + url);
  }
}).listen(PORT, "::", () => {
  console.log("Static server running at http://localhost:" + PORT);
});
