import React from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { fetchBooks } from '../lib/features/books'
import BookContainer from '../containers/BookContainer'

const AllBooks = () => {
  const dispatch = useAppDispatch()
  const { books, isloading } = useAppSelector((state) => state.booksState)

  useEffect(() => {
    if (!books || books.length === 0) {
      console.log('fetch')
      dispatch(fetchBooks())
    }
  }, [books, dispatch])
  return <BookContainer />
}

export default AllBooks
