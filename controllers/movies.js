const Movie = require('../models/Movie');

const getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find({});
    res.status(200).json({ allMovies });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({ movie });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getMovieWithId = (req, res) => {
  res.status(200).json({ id: req.params.id });
};

const updateMovie = (req, res) => {
  res.status(200).json({ id: req.params.id });
};

const deleteMovie = (req, res) => {
  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovieWithId,
  updateMovie,
  deleteMovie,
};
