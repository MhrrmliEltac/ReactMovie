import React, { useState } from "react";
import "./MovieItem.css";
import { useDispatch } from "react-redux";
import { addListener } from "@reduxjs/toolkit";
import { addList } from "../Redux/MovieSlice/saveDataSlice";

const MovieItem = (props) => {
  const { Title, Year, Poster, imdbID } = props;

  const dispatch = useDispatch();

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          onClick={() =>
            dispatch(addList({ title: Title, poster: Poster, year: Year, id:imdbID }))
          }
          type="button"
          className="movie-item__add-button"
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
