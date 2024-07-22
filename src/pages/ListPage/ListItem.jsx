import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ListItem = ({id}) => {
    const [data,setData] = useState()
    useEffect(()=>{
        const getDataMovie = async () => {
          const response = await axios.get(
            `http://www.omdbapi.com/?i=${id}&apikey=9081896c`
          );
          setData([response.data]);
        };
        getDataMovie();
    },[])

  return (
    <div>
        {data?.map((item)=>{
            return (
              <a
                href={`https://www.imdb.com/title/${item.imdbID}`}
                key={item.imdbID}
                target="_blank"
              >
                <p>
                  {item.Title} {item.Year}
                </p>
              </a>
            );
        })}
    </div>
  )
}

export default ListItem