const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

module.exports = app;
