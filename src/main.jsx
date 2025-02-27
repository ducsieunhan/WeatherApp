import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import RootLayout from './pages/RootLayout.jsx'
import CityDetail from './pages/CityDetail.jsx'
import CityDetailTime from './pages/CityDetailTime.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/city',
        element: <CityDetail />
      },
      {
        path: '/:cityName/byHours',
        element: <CityDetailTime />
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
