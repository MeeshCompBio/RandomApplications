
const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

pgClient.on('connect', () => {
    pgClient
      .query('CREATE TABLE IF NOT EXISTS values (number INT)')
      .catch((err) => console.log(err));
  });