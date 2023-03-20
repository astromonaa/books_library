import { ISortCategory } from '../types/types';

export const categoriesList:ISortCategory[] = [
  { id: 1, value: '', text: 'all' },
  { id: 2, value: 'Art', text: 'Art' },
  { id: 3, value: 'Biography', text: 'Biography' },
  { id: 4, value: 'Computers', text: 'Computers' },
  { id: 5, value: 'History', text: 'History' },
  { id: 6, value: 'Medical', text: 'Medical' },
  { id: 7, value: 'Poetry', text: 'Poetry' },
]

export const sortingList:ISortCategory[] = [
  { id: 1, value: 'relevance', text: 'relevance' },
  { id: 2, value: 'newest', text: 'newest' },
]