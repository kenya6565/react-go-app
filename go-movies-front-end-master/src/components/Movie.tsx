import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesList } from "../interfaces/movie";

const Movie = () => {
  // set empty value to avoid type err
  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    release_date: "",
    runtime: 0,
    mpaa_rating: "",
    description: "",
  });
  let { id } = useParams();

  // when getting id by useParams, this happens
  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "Highlander",
      release_date: "1986-03-07",
      runtime: 116,
      mpaa_rating: "R",
      description: "Some long description",
    };
    setMovie(myMovie);
  }, [id]);

  return (
    <div className="text-center">
      <h2>Movie: {movie.title}</h2>
      <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}</em></small>
      <hr />
      <p>movie.description</p>
    </div>
  );
};

export default Movie;
