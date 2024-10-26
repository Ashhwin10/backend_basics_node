const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(serverInfo)); //Stringify the response
  res.end();
});

const serverInfo = {
  serverName: "Crio Server",
  version: "1.0.0",
  currentDate: new Date().toDateString(),
  currentTime: new Date().toTimeString(),
};

server.listen(8082, () => {
  console.log("listening...");
});
