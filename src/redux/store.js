import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { movieApi } from "./featureApi/movieApiSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movieApi.middleware)
})