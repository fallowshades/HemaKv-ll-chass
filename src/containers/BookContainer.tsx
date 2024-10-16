import React from 'react'
import { useAppSelector } from '../lib/hooks'
import BookCard from '../components/BookCard'
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
  return (
    <div>
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
