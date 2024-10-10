import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { RootState } from '../lib/store'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
const BooksPage = () => {
  const { books } = useAppSelector((state: RootState) => state.booksState)

  let params = useParams()
  let clickedProduct = books.filter((item) => item.id == params.id)[0]

  const { adult, id } = clickedProduct

  const dispatch = useAppDispatch()

  const addToFavorites = () => {
    const book = {
      favoriteID: id,
      bookid: id,
    }
    dispatch()
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

export default BooksPage
