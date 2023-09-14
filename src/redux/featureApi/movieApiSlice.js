import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) =>
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_TMBD_API_TOKEN}`
      ),
  }),
  endpoints: (builder) => ({
    getTopMovies: builder.query({
      query: () => '/movie/popular?language=en-US&page=1',
    }),
    getMovieById: builder.query({
      query: ({id}) => `/movie/${id}`,
    }),
    searchMovieByTitle: builder.query({
      query: ({ search, page = 1 }) =>
        `/search/${search}?include_adult=false&language=en-US&page=${page}`,
    }),
  }),
});

export const {
  useGetTopMoviesQuery,
  useGetMovieByIdQuery,
  useSearchMovieByTitleQuery,
} = movieApi;
