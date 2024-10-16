import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { RootState } from '../lib/store'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { addBookFavorite } from '../lib/features/books'
const SingleBook = () => {
  const { books } = useAppSelector((state: RootState) => state.booksState)

  let params = useParams()
  let clickedProduct = Array.isArray(books)
    ? books.find((item) => item.id == params.id)
    : null

  const { adult, id } = clickedProduct || {}

  const dispatch = useAppDispatch()

  const addToFavorites = () => {
    const book = {
      favoriteID: id,
      bookid: id,
    }
    dispatch(addBookFavorite(book))
  }
  console.log(books)

  if (!clickedProduct) {
    return (
      <footer>
        <Link to='/'>back</Link>
        <button onClick={addToFavorites}></button>
      </footer>
    )
  }

  return (
    <div>
      <header>
        <h2>{id}</h2>
      </header>
      <div>{adult}</div>
      <footer>
        <Link to='/'>back</Link>
        <button onClick={addToFavorites}></button>
      </footer>
    </div>
  )
}

export default SingleBook
