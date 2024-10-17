import React from 'react'
import { Link } from 'react-router-dom'
import { BookItem } from '../utils/types'
const BookCard = ({ item }: { item: BookItem }) => {
  const { adult, id, title } = item

  const mocORresponseTitle: any = title || id
  return (
    <div>
      <h1>{mocORresponseTitle}</h1>
      <Link
        to={`/${id}`}
        className='text-lg'
      >
        {' '}
        CLICK
      </Link>
    </div>
  )
}

export default BookCard
