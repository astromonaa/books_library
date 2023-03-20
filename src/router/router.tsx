import Main from '../pages/Main'
import BookInfo from '../pages/BookInfo'


export const routes = [
  {
    path: '/',
    element: <Main/>,
    exact: true
  },
  {
    path: '/books/:id',
    element: <BookInfo/>,
    exact: true
  }
]