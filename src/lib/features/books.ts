import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  books: [],
}
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
})

export default bookSlice.reducer
