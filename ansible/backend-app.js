const http = require("http");
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from the backend Node.js server!\n");
}).listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
