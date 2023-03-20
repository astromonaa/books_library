import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { ISearchResponse,  IBookItem } from '../../types/types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
  }),
  endpoints: build => ({
    fetchBooks: build.query<ISearchResponse, any> ({
      query: (query) => ({
        url: '/books/v1/volumes',
        method: 'GET',
        params: {
          key: import.meta.env.VITE_TOKEN,
          q: `${query.text}+subject:${query?.category || ''}`,
          orderBy: query?.sortBy || 'relevance',
          maxResults: query.maxResults || 30,
          startIndex: query.startIndex || 0
        }
      })
    }),
    fetchBookItem: build.query<IBookItem, any>({
      query: (id) => ({
        url: `/books/v1/volumes/${id}`,
        method: 'GET'
      })
    })
  })
})

export const {useLazyFetchBooksQuery, useFetchBookItemQuery} = api