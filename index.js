const express = require('express');
const mongoose = require('mongoose');
const dotnev = require('dotenv').config();
const cors = require('cors');
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

const tourRoute = require('./routes/v1/tour.route');
//server
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URL, {
    dbName: 'tour-management-system',
  })
  .then(() => {
    console.log('Database connected successfully');
  });
//routes
app.use('/api/v1/tour', tourRoute);
app.get('/', (req, res) => {
  res.send('Route is working');
});

app.listen(port, () => {
  console.log('app is running at port', port);
});
