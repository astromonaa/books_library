import { useAppSelector } from '../hooks/hooks';
import BookItem from './BookItem';
import { Button, Spinner } from 'react-bootstrap'
import { useLibrary } from '../hooks/useLibrary';


const BooksList = () => {
  const { searchBooks } = useAppSelector(state => state.books)
  const { loadMore, isLoading } = useLibrary()

  if (!searchBooks?.items?.length) {
    return <div className='empty-books'></div>
  }

  return (
    <>
      {
        isLoading
          ? <Spinner className='spinner' color='blue' />
          : <div className='books-list-wrapper'>
              {searchBooks?.totalItems ? <div className='results-count'>Found {searchBooks.totalItems} results</div> : ''}
              <div className='books-list'>
                {
                  searchBooks.items?.map((book, idx) => <BookItem key={book.id + idx} book={book} />)
                }
              </div>
              {searchBooks?.totalItems > searchBooks?.items?.length && <Button onClick={loadMore} className='load-more'>Load more</Button>}
            </div>
      }
    </>
  );
};

export default BooksList;