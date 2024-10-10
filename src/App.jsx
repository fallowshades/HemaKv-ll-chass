import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AllBooks, BooksPage, SingleBook, SharedNav } from './pages'
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedNav />,

    children: [
      { index: true, element: <AllBooks /> },
      { path: ':id', element: <SingleBook /> },
      {
        path: 'books',
        element: <BooksPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
