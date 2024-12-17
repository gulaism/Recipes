import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const recipesApi = createApi({
  reducerPath: 'recipesApi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }), 
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => 'recipes?limit=0', 
    }),
  }),
});

export const { useGetRecipesQuery } = recipesApi;
export default recipesApi;
