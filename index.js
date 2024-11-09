const express = require("express");
const { Server } = require("socket.io");
const app = express();
const port = 3000;
const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});



let buyNsp = io.of("/buy")
let sellNsp = io.of("/sell")



buyNsp.on("connection", (socket) => {
  buyNsp.emit("myBroadcast", "Hello Buy!");
});



sellNsp.on("connection", (socket) => {
  sellNsp.sockets.emit("myBroadcast", "Hello Sell!");
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
