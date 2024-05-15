// implement your server here
// require your posts router and connect it here
const express = require('express');
const server = express();

server.use(express.json());

const postsRouter = require('./posts/posts-router');

// server.use('./api/posts/posts-router', postsRouter)

server.use('/', (req, res) => {
    res.status(200).send('Hello from express')
});

module.exports = server