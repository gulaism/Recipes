// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import recipesApi from './recipesApi';

const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware), 
});

export default store;
