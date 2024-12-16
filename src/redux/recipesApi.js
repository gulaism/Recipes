// src/features/recipesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const recipesApi = createApi({
  reducerPath: 'recipesApi', // The name of the slice
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }), // Base URL
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => 'recipes?limit=0', // The endpoint
    }),
  }),
});

// Export the auto-generated hook for the query
export const { useGetRecipesQuery } = recipesApi;
export default recipesApi;
