import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import { BooksActions } from '../store/BooksSlice';

const actions = {
  ...BooksActions
}


export function useActions() {
  const dispath = useDispatch();

  return bindActionCreators(actions, dispath)
}