const express = require("express");
const { Server } = require("socket.io");
const app = express();
const port = 3000;
const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on('connection', (socket) => {
    let data = new Date();
    let time = data.getTime();

    setInterval(() => { 
        socket.emit('time', time); 
        time += 2000; 
    }, 200)
      
})

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
