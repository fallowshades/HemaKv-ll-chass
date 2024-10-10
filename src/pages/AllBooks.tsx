import React from 'react'
import { useEffect } from 'react'
import { useAppDispatch } from '../lib/hooks'
import { fetchBooks } from '../lib/features/books'
const AllBooks = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])
  return <div>AllBooks</div>
}

export default AllBooks
