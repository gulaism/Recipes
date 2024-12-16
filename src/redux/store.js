// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import recipesApi from './recipesApi';

const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer, // Add the API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware), // Add the API slice middleware
});

export default store;
