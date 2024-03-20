const http = require("http");
// provides functionality for spinning up the server
const algorithm = require("./algorithm");

const port = process.env.PORT || 3000;

const server = http.createServer();

server.listen(port);
