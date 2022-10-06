const express = require('express');
const {
  getAllMovies,
  createMovie,
  getMovieWithId,
  updateMovie,
  deleteMovie,
} = require('../controllers/movies');
const router = express.Router();

// routes:
router.route('/').get(getAllMovies).post(createMovie);

router.route('/:id').get(getMovieWithId).patch(updateMovie).delete(deleteMovie);

module.exports = router;
