const express = require('express');

const server = express();

server.use(express.json());
server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const { method, originalUrl } = req;
  console.log(`${method} to ${originalUrl}`);

  next();
}

function validateUserId(req, res, next) {
  if (req.id){
    req.user = req.id;
    next()
  }else{
    res.status(400).json({ message: 'Invalid user id'})
  }
}

module.exports = server;
