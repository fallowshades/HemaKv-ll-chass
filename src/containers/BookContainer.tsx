import React from 'react'
import { useAppSelector } from '../lib/hooks'
import BookCard from '../components/BookCard'
import BookSearchList from './BookSearchList'
const BookContainer = () => {
  const { books } = useAppSelector((state) => state.booksState)
  console.log(books)
  if (!books || !Array.isArray(books) || books.length === 0) {
    return (
      <div>
        <p>no books to display,hmm?</p>
      </div>
    )
  }

  console.log(books)
  //mobile friendly layoout
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            item={book}
          />
        )
      })}
    </div>
  )
}

export default BookContainer
