import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const fetchData = createAsyncThunk("user/fetchData", async (data) => {
  // console.log("Göndərilən məlumat:", data);
  const listData = await axios.post(
    `https://acb-api.algoritmika.org/api/movies/list`,
    data
  );
  return listData.data;
});

// export const fetchList = createAsyncThunk("list/fetchList", async (listId) => {
//   try {
//     const response = await axios.get(
//       `https://acb-api.algoritmika.org/api/movies/list/${listId}`
//     );
//     return response.data;

//   } catch (error) {
//     console.log(error);
//   }
// });


export const listDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = [action.payload, ...state.data];
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default listDataSlice.reducer;
