import { useRef, useState, useEffect } from 'react';
import { categoriesList, sortingList } from '../utils/utils';
import { useLazyFetchBooksQuery } from '../store/api/api';
import { useActions } from './actions';
import { useAppSelector } from './hooks';


export function useLibrary() {
  const [categories, setCategories] = useState(categoriesList)
  const [sortByList, setSortByList] = useState(sortingList)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const { setSearchResult, setPage, setSearchValue, addMoreBooks, setCategory, setSortBy } = useActions()
  const { page, searchValue, category, sortBy, searchBooks } = useAppSelector(state => state.books)

  const [fetchBooks, { data, isLoading }] = useLazyFetchBooksQuery()

  useEffect(() => {
    if (data) {
      if (page === 0) {
        setSearchResult(data)
      } else {
        addMoreBooks([...data?.items || []])
      }
    }
  }, [data])

  useEffect(() => {
    if (searchBooks.items.length) {
      setPage(0)
      const query = { text: searchValue, startIndex: 0, maxResults: 30, category, sortBy, }
      fetchBooks(query)
    }
  }, [category, sortBy])


  const filter = (value: string) => {
    setCategory(value)
  }

  const sort = (value: string) => {
    setSortBy(value)
  }

  const search = () => {
    setPage(0)
    const query = { text: searchInputRef?.current?.value, startIndex: 0, maxResults: 30, category, sortBy }
    setSearchValue(searchInputRef?.current?.value)
    fetchBooks(query)
  }

  const loadMore = () => {
    setPage(page + 1)
    const query = { text: searchValue, startIndex: page + 1, maxResults: 30, category, sortBy }
    fetchBooks(query)
  }

  return {
    categories,
    sortByList,
    filter,
    sort,
    searchInputRef,
    search,
    loadMore,
    isLoading
  }
}