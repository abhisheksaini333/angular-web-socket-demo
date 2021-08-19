const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

// handle the CORS
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', '*');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   next();
// });

app.use(bodyParser.json());

app.use(cors());

// Send Notification API
app.post('/send-notification', (req, res) => {
  console.log(req.body)
  const notify = {data: req.body};
  socket.emit('notification', notify); // Updates Live Notification
  res.send(notify);
});

const server = app.listen(port, () => {
  console.log(`Server connection on  http://127.0.0.1:${port}`);  // Server Connnected
});
// Socket Layer over Http Server
const socket = require('socket.io')(server, {
  cors: {
    origin: "http://127.0.0.1:4200",
    methods: ["GET", "POST"],
    // allowedHeaders: ["my-custom-header"],
    // credentials: true
  }
});
// On every Client Connection
socket.on('connection', socket => {
    console.log('Socket: client connected');
});
