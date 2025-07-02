import http from "http";

// let server = http.createServer((req, res) => {});


let server = http.createServer((req, res) => {
  res.end("Request received...");
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
