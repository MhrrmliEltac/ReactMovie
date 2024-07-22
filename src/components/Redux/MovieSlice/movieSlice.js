import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movie: [],
  loading: false,
  error: false,
};

export const searchMovie = createAsyncThunk("user", async (search) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${search}&apikey=9081896c`
  );
  return response.data;
});

export const movieSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovie.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
    builder.addCase(searchMovie.rejected, (state, action) => {
      state.error = false
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = movieSlice.actions;

export default movieSlice.reducer;
