import React from 'react'
import { useAppSelector } from '../lib/hooks'
import BookCard from '../components/BookCard'
const BookContainer = () => {
  const { books } = useAppSelector((state) => state.booksState)

  if (!books || !Array.isArray(books.results) || books.results.length === 0) {
    return (
      <div>
        <p>no books to display,hmm?</p>
      </div>
    )
  }

  console.log(books)
  return (
    <div>
      {books.results.map((book) => {
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
