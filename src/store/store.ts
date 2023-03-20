import {configureStore} from '@reduxjs/toolkit'
import { api } from './api/api';
import { BooksReducer } from './BooksSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    books: BooksReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>