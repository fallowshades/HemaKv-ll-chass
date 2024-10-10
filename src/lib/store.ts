import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './features/books'

export const store = configureStore({
  reducer: {
    booksState: booksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
}
