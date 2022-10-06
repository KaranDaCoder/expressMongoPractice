require('dotenv').config();
const express = require('express');
const app = express();
const movies = require('./routes/movieRoutes');
const connectDB = require('./db/connect');

const PORT = 3000;

//middleware
app.use(express.json());

app.use('/api/v1/movies', movies);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
