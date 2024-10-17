import React from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { fetchBooks } from '../lib/features/books'
import BookContainer from '../containers/BookContainer'
import MetaTags from '../seo/MetaTags'
const AllBooks = () => {
  const dispatch = useAppDispatch()
  const { books, isloading } = useAppSelector((state) => state.booksState)

  useEffect(() => {
    if (!books || books.length === 0) {
      console.log('fetch')
      dispatch(fetchBooks())
    }
  }, [dispatch])
  return (
    <div>
      <MetaTags
        title='All books'
        description='Välkommen till min hemsida.'
        url='http://localhost:5173/' // Provide the full URL for Open Graph
        canonicalUrl='http://localhost:5173/' // Full URL for canonical
      />
      <BookContainer />
    </div>
  )
}

export default AllBooks
