import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { addBookFavorite, removeFavoriteBook } from '../lib/features/books'
const BooksPage = () => {
  const dispatch = useAppDispatch()
  const { favBook } = useAppSelector((state) => state.booksState)

  // Handle removing a book by its favoriteID
  const handleRemove = (favoriteID) => {
    dispatch(removeFavoriteBook(favoriteID)) // Pass only the ID to the action
  }

  if (favBook?.length === 0) {
    return (
      <div>
        <p>No favorite books added yet.</p>
        <Link to='/'>Go to Home</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Favorite Books</h2>
      <ul>
        {favBook.map((book) => (
          <li key={book.favoriteID}>
            {book.title} {/* Assuming 'title' is a property of the book */}
            <button
              className='text-red'
              onClick={() => handleRemove(book.favoriteID)} // Pass the book's favoriteID
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default BooksPage
