const express = require('express');
const server = express();

server.use(express.json());

let games = [
    { title: 'Pacman', genre: 'Arcade', releaseYear: 1980 },
    { title: 'Black Ops 4', genre: 'FPS', releaseYear: 2019 },
    { title: 'Last Of Us', genre: 'Survival Horror', releaseYear: 2013 }
  ];

server.get('/', (req, res) => {
    res.send('Up and running');
  });

  module.exports = { server, games}