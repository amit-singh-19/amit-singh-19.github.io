import http from 'http';

let server = http.createServer((req, res) => {
    res.end("Good Morning")
})

server.listen(8081, () => {
    console.log("Server running on port 8081")
})