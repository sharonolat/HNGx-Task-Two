import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  search: '',
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetchMovies: (state, action) => {
      
    }
  }
})

export default movieSlice.reducer;
export const {fetchMovies} = movieSlice.actions

