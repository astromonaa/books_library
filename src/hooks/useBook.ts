import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from './hooks';
import { useFetchBookItemQuery } from "../store/api/api";


export function useBook() {
  const {id} = useParams()

  const {data:bookInfo, isLoading} = useFetchBookItemQuery(id)

  return {
    bookInfo,
    isLoading
  }
}