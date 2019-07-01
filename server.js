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

server.get('/games', (req, res) => {
  res.status(200).json(games);
});

server.post('/games', (req, res) => {
  const game = req.body;
  games = [...games, game];
  res.status(201).json(games[games.length - 1]);
});

module.exports = { server, games };
