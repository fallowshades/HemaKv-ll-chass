import React from 'react'
import { useAppSelector } from '../lib/hooks'
const BookContainer = () => {
  const { books } = useAppSelector((state) => state.booksState)
  return <div>{books?.[0]}</div>
}

export default BookContainer
