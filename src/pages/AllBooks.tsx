import React from 'react'
import { useEffect } from 'react'
import { useAppDispatch } from '../lib/hooks'
import { fetchBooks } from '../lib/features/books'
import BookContainer from '../containers/BookContainer'

const AllBooks = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])
  return <BookContainer />
}

export default AllBooks
