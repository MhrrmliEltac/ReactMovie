import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./MovieSlice/movieSlice";
import saveDataSlice from "./MovieSlice/saveDataSlice";
import listData, { listDataSlice } from "./MovieSlice/listData";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    favourite: saveDataSlice,
    library: saveDataSlice,
    data: listData
  },
});
