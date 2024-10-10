import React from 'react'
import { Link } from 'react-router-dom'
import { BookItem } from '../utils/types'
const BookCard = ({ item }: { item: BookItem }) => {
  const { adult, id, title } = item
  return (
    <div>
      <h1>{title}</h1>
      <Link to={`/${id}`}> CLICK</Link>
    </div>
  )
}

export default BookCard
