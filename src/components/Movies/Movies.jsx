import React, { Component, useEffect, useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import "./Movies.css";
import { searchMovie } from "../Redux/MovieSlice/movieSlice";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovie("spiderman"));
  }, []);

  const movie = useSelector((store) => store.movie);

  return (
    <ul className="movies">
      {movie?.movie?.Search?.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
