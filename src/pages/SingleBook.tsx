import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { RootState } from '../lib/store'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { addBookFavorite } from '../lib/features/books'
import MetaTags from '../seo/MetaTags'
const SingleBook = () => {
  const { books } = useAppSelector((state: RootState) => state.booksState)

  let params = useParams()
  let clickedProduct = Array.isArray(books)
    ? books.find((item) => item.id == params.id)
    : null
  console.log(clickedProduct)
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
      <footer className='grid'>
        <Link to='/'>back</Link>
        <button onClick={addToFavorites}>click to add to favorites</button>
      </footer>
    )
  }

  return (
    <div>
      <MetaTags
        title='single book'
        description='can add and just see some details. nothing much really'
        url={`http://localhost:5173/books${id}`}
        canonicalUrl={`http://localhost:5173/${id}`}
      />
      <header>
        <h2>{id}</h2>
      </header>
      <div>{adult}</div>
      <footer>
        <Link to='/'>back</Link>
        <button onClick={addToFavorites}>click to add to favorites</button>
      </footer>
    </div>
  )
}

export default SingleBook
