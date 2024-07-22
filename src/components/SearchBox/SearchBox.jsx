import React, { Component, useEffect, useRef, useState } from "react";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import { searchMovie } from "../Redux/MovieSlice/movieSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [state, setState] = useState({
    searchLine: "",
  });

  const searchLineChangeHandler = (e) => {
    setState({ searchLine: e.target.value });
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };

  const { searchLine } = state;

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            ref={inputRef}
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
          onClick={() => dispatch(searchMovie(inputRef.current.value))}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
