import React from 'react'
import { useAppSelector } from '../lib/hooks'
const BookContainer = () => {
  const { books } = useAppSelector((state) => state.booksState)

  console.log(books)
  return <div>book: {books?.[0]}</div>
}

export default BookContainer
