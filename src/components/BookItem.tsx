import { FC } from "react";
import { IBookItem } from "../types/types";
import DefaultImg from '../assets/default_book.jpg'
import { Link } from "react-router-dom";

interface IBookItemProps {
  book: IBookItem
}

const BookItem:FC<IBookItemProps> = ({book}) => {
  return (
    <Link to={`/books/${book.id}`} className="card-item">
      <img src={book.volumeInfo?.imageLinks?.thumbnail || DefaultImg} alt="img" />
      <small>{book.volumeInfo?.categories?.join(' ') || 'default'}</small>
      <div>{book.volumeInfo?.title?.slice(0, 75) || 'No title'}</div>
      <span>{book?.volumeInfo?.authors?.join(' ')}</span>
    </Link>
  );
};

export default BookItem;