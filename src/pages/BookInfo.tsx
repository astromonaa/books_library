import { Spinner } from 'react-bootstrap';
import { useBook } from '../hooks/useBook';
import '../styles/bookInfo.scss'

const BookInfo = () => {
  const { bookInfo, isLoading } = useBook()

  return (
    <>
      {
        isLoading
        ? <Spinner className='spinner'/>
        : <div className='book-info'>
            <div className="book-info__left">
              <img src={bookInfo?.volumeInfo.imageLinks?.thumbnail} alt="book" />
            </div>
            <div className="book-info__right">
              <span>{bookInfo?.volumeInfo?.categories?.join(' / ')}</span>
              <h1>{bookInfo?.volumeInfo?.title}</h1>
              <small>{bookInfo?.volumeInfo?.authors?.join(' ')}</small>
              <div className='book-info__desc'>{bookInfo?.volumeInfo?.subtitle}</div>
            </div>
          </div>
      }
    </>
  );
};

export default BookInfo;