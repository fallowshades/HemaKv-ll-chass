import { useNavigate } from 'react-router-dom'
import React from 'react'
const SearchItem = ({ id }) => {
  const navigate = useNavigate()

  function handleRedirect(id) {
    navigate(`/${id}`)
  }

  return (
    <div
      className='bg-white flex items-center my-2 p-2 rounded-md hover:cursor-pointer'
      onClick={() => handleRedirect(id)}
    >
      <div className='flex items-center w-full justify-between'>
        <p className='text-lg font-medium'>{id}</p>
      </div>
    </div>
  )
}

export default SearchItem
