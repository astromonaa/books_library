import { IBooksState } from '../types/types';
import {createSlice} from '@reduxjs/toolkit'

const initialState: IBooksState = {
  searchBooks: {
    kind: '',
    totalItems: 0,
    items: []
  },
  page: 1,
  searchValue: '',
  category: '',
  sortBy: 'relevance',
}

const BooksSlice = createSlice({
  name: 'BooksSlice',
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.searchBooks = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    addMoreBooks: (state, action) => {
      state.searchBooks.items.push(...action.payload)
    },
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    }
  }
})

export const BooksReducer = BooksSlice.reducer
export const BooksActions = BooksSlice.actions