import React from 'react'
import { useState } from 'react'
import { useAppSelector } from '../lib/hooks'
import SearchItem from '../components/SearchItem'
const BookSearchList = () => {
  const [input, setInput] = useState('')
  const { books } = useAppSelector((state) => state.booksState)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(input?.toLowerCase())
  )

  function handleSearch(e) {
    setInput(e.target.value)
  }

  return (
    <div>
      {input && (
        <div className='searchItem'>
          <ul>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <li key={book.id}>
                  <SearchItem id={book.id} />
                </li>
              ))
            ) : (
              <p className='text-white'>No books found</p>
            )}
          </ul>
        </div>
      )}
      <input
        type='text'
        value={input}
        placeholder='Search'
        onChange={handleSearch}
        className='w-[80%] px-8 py-2 border border-gray-300 border-r-0 rounded-l-lg focus:outline-none'
      />
    </div>
  )
}

export default BookSearchList
