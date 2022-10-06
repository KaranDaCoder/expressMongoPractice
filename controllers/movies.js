const Movie = require('../models/Movie');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllMovies = asyncWrapper(async (req, res) => {
  const allMovies = await Movie.find({});
  res.status(200).json({ allMovies });
});

const createMovie = asyncWrapper(async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json({ movie });
});

const getMovieWithId = asyncWrapper(async (req, res, next) => {
  const { id: movieID } = req.params;
  const movie = await Movie.findOne({ _id: movieID });
  if (!movie) {
    return next(
      createCustomError(`Resource not found with task ID: ${movieID}`, 404)
    );
  }
  res.status(200).json({ movie });
});

const updateMovie = asyncWrapper(async (req, res) => {
  const { id: movieID } = req.params;
  const movie = await Movie.findOneAndUpdate({ _id: movieID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!movie) {
    return next(
      createCustomError(`Update Failed!for movie ID : ${movieID} , 404`)
    );
  }

  res.status(200).json({ message: movie });
});

const deleteMovie = asyncWrapper(async (req, res) => {
  const { id: movieID } = req.params;
  const movie = await Movie.findOneAndDelete({ _id: movieID });
  if (!movie) {
    return next(
      createCustomError(
        `Delete Failed: Resource not found with task ID: ${movieID}`,
        404
      )
    );
  }
  res.status(200).json({ message: `Successfully deleted ${movieID}` });
});

module.exports = {
  getAllMovies,
  createMovie,
  getMovieWithId,
  updateMovie,
  deleteMovie,
};
