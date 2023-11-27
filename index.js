const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

const Welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", Welcome);

const getMovie = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", getMovie);

const thisMovie = (req, res) => {
  const movieId = req.params.id;
  const movie = movies.find((x) => x.id == movieId);

  if (movie) {
    res.status(200).send(`This is ${movie.title}`);
  } else {
    res.status(404).send("Movie not found");
  }
};

app.get("/api/movies/:id", thisMovie);