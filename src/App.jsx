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
import TagManager from 'react-gtm-module'

/**
 * on component mount
 */
const tagManagerArgs = {
  gtmId: 'G-Q100MPXMDM',
}
TagManager.initialize(tagManagerArgs)
function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    //manually believe the lib normally get anyway
    // window.dataLayer.push({
    //   event: 'pageview',
    //   page: {
    //     url: location,
    //     title: title,
    //   },
    // })
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    })
  }, [location])

  return null // This component doesn't render anything
}

const App = () => {
  return (
    <RouterProvider router={router}>
      <AnalyticsTracker />
    </RouterProvider>
  )
}

export default App
