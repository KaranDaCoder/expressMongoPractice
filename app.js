require('dotenv').config();
const express = require('express');
const app = express();
const movies = require('./routes/movieRoutes');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const asyncWrapper = require('./middleware/async');
const errorHandlerMiddleware = require('./middleware/error-handler');

const PORT = 3000;

//middleware
app.use(express.json());

app.use('/api/v1/movies', movies);

//custom-error handling middleware
app.use(notFound);
app.use(asyncWrapper);
app.use(errorHandlerMiddleware);

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
