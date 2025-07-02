import http from 'http';

let server = http.createServer((req, res) => {
    res.end("Good Evening!!")
})

server.listen(8082, () => {
    console.log("Server running on port 8081")
})