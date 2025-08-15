const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const path = require('path');
const { log } = require('console');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set("view engine", "ejs");
app.use(express.static('public'));

io.on("connection", (socket) => {
    console.log("Connected");
})

app.get('/', (req,res)=> {
      res.render("index");
})

server.listen(8000, 
    () => {
        console.log("Server started");
    }
)