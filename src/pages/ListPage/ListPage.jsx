import React, { useEffect, useState } from "react";
import "./ListPage.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListItem from "./ListItem";

const ListPage = () => {
  const [favState, setFavState] = useState();
  const favourite = useSelector((store) => store.favourite);
  const getDataWithId = useSelector((store) => store.data);

  console.log(getDataWithId.data);
  const { id } = useParams();
  useEffect(() => {
    const getDataFunc = async () => {
      const response = await axios.get(
        `https://acb-api.algoritmika.org/api/movies/list/${id}`
      );
      setFavState(response.data);
    };
    getDataFunc();
  }, [id]);

  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
      <ul>
        {favState?.movies?.map((item) => {
          return (
            <li key={item}>
              <ListItem id={item}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;
