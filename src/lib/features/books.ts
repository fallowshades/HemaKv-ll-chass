import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { createAsyncThunk } from '@reduxjs/toolkit'

const apiKey = '87c09e44'
// `http://www.omdbapi.com/?i=tt3896198&apikey=87c09e44`

const tmdbAPI = '711ff86aba647821e529c801d4ff3403'

/**
 * eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTFmZjg2YWJhNjQ3ODIxZTUyOWM4MDFkNGZmMzQwMyIsIm5iZiI6MTcyODU1NTc3NS44MTM0MzcsInN1YiI6IjY3MDdhNmU2NjcxODAxMmZjMjMzYWM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0_ip__qT2wxqHsHLgZ4lldC268jeev_QZxpNz6WVpkc
 */

//    `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbAPI}`
//      `https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies?language=en-US&page=1&sort_by=created_at.asc&${tmdbAPI}`,

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const options = { method: 'GET', headers: { accept: 'application/json' } }

  const moc = mockApiResponse
  const response =
    moc ||
    (await fetch(
      `
https://api.themoviedb.org/3/discover/movie?api_key=${tmdbAPI}&include_adult=true`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err)))

  return response
})

import { bookState, mockApiResponse } from '../../utils/types'

export interface BookWithNull {}

const initialState: bookState = {
  books: [],
  favBook: [],
  isloading: false,
  error: undefined,
}
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookFavorite: (state, action) => {
      const newBook = action.payload
      const existingBook = state.favBook.find(
        (i) => i.favoriteID === newBook.favoriteID
      )
      console.log('add')
      if (!existingBook) {
        state.favBook.push(newBook)
      }

      localStorage.setItem('bookFavorites', JSON.stringify(state))
    },
    clearFavorites: () => {
      localStorage.setItem('bookFavorites', JSON.stringify(initialState))
      return initialState
    },
    removeFavoriteBook: (state, action) => {
      const favoriteBookID = action.payload
      state.favBook = state.favBook.filter(
        (book) => book.favoriteID !== favoriteBookID
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isloading = true
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isloading = false
        //state.books = action.payload

        if (action.payload && Array.isArray(action.payload.results)) {
          state.books = action.payload.results
        } else {
          state.books = [] // Fallback to empty array if data is missing or invalid
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isloading = false
        state.error = action.error.message
      })
  },
})
export const { addBookFavorite, clearFavorites, removeFavoriteBook } =
  bookSlice.actions

export default bookSlice.reducer
