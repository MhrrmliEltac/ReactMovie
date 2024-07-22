import React, { Component, useEffect, useRef, useState } from "react";
import "./Favorites.css";
import MovieItem from "../MovieItem/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import { addLibrary, deleteList } from "../Redux/MovieSlice/saveDataSlice";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../Redux/MovieSlice/listData";
import axios from "axios";

const Favorites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const favourite = useSelector((store) => store.favourite);
  // console.log(favourite.favourites)
  const library = useSelector((store) => store.library);
  const listData = useSelector((store) => store.data);
  const {data} = useSelector(state=>state.data)
  const inputValue = useRef();
  console.log(listData.data);

  const [idState, setIdState] = useState({});

  const handClick = () => {
    if (
      inputValue.current.value.length > 0 &&
      favourite.favourites.length > 0
    ) {
      const ids = favourite.favourites.map((item) => item.id);
      dispatch(
        addLibrary({
          title: inputValue.current.value,
          id: ids,
        })
      );
      dispatch(
        fetchData({ title: inputValue.current.value, movies: ids })
      )
      // .then((result) => {
      //   if (result.payload) {
      //     dispatch(fetchList(result.payload.id));
      //   }
      // });
    } else {
      alert("Siyahinin adini və kino əlavə et");
    }
  };

  return (
    <div className="favorites">
      <input ref={inputValue} className="favorites__name" />
      <ul className="favorites__list">
        {favourite.favourites.map((item) => {
          return (
            <li className="list" key={item.id}>
              {" "}
              {item.title} ({item.year}){" "}
              <i
                onClick={() => dispatch(deleteList(item.id))}
                className="fa-solid fa-trash-can delete"
              ></i>
            </li>
          );
        })}
      </ul>
      <button
        disabled={
          inputValue?.current?.value.length === 0 &&
          favourite.favourites.length === 0
            ? true
            : false
        }
        onClick={handClick}
        type="button"
        className="favorites__save"
      >
        Сохранить список
      </button>
      <div className="container">
        {library.library.map((item) => {
          return (
            <li className="list" key={item.id}>
              {listData.data.map((id) => (
                // <Link to={"/list/"+id.id} key={id.id}>
                //   {item.title}
                // </Link>
                <p key={id.id} onClick={()=>navigate(`/list/${id.id}`)}>{item.title}</p>
              ))}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
