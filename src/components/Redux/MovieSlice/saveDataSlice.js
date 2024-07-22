import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
  library: [],
  loading: false,
  error: false,
};

export const saveDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addList: (state, action) => {
     state.favourites = state.favourites.find((favorite) => favorite.id === action.payload.id)? state.favourites : [...state.favourites, action.payload];
    },
    addLibrary: (state,action)=>{
      state.library = [action.payload,...state.library]
    },
    deleteList: (state, action) => {
      state.favourites = state.favourites.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
});

export const { addList, deleteList, addLibrary } = saveDataSlice.actions;

export default saveDataSlice.reducer;
