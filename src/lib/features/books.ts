import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { createAsyncThunk } from '@reduxjs/toolkit'

const apiKey = '87c09e44'
// `http://www.omdbapi.com/?i=tt3896198&apikey=87c09e44`

const tmdbAPI = '711ff86aba647821e529c801d4ff3403'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch('')
  if (!response.ok) throw new Error('...')
  const json = await response.json()

  return json
})

export type books = {
  books: any[]
  isloading: boolean
  error: any
}

const initialState: books = {
  books: [],
  isloading: false,
  error: undefined,
}
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isloading = true
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isloading = false
        state.books = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isloading = false
        state.error = action.error.message
      })
  },
})

export default bookSlice.reducer
