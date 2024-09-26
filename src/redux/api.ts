import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { detailType, bodyType, resType } from "../types";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGJmMWYxOGI3NTcxYTVlZmQ4NmJmMmM5ZWRlMmI3ZSIsInN1YiI6IjY1NGE3YTczNDFhNTYxMzM2OTNiZmZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ok0AYyE3-DWPld_WMf1sXpU3fCyRM_EZZwk8Xbddi8U",
    },
  }),

  tagTypes: ["Movies", "Favorites"],

  endpoints: (builder) => ({
    getMovies: builder.query<resType, string>({
      query: (url) => url,
    }),

    getDetail: builder.query<detailType, string | undefined>({
      query: (id) => `/movie/${id}`,
    }),

    addToFavorite: builder.mutation<string, bodyType>({
      query: (body: bodyType) => ({
        url: "/account/19719088/favorite",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["Favorites"],
    }),

    getFavorites: builder.query<resType, void>({
      query: () => "/account/19719088/favorite/movies",
      providesTags: ["Favorites"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
  useGetDetailQuery,
} = api;
