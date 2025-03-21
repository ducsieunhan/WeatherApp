import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import RootLayout from './pages/RootLayout.jsx'
import CityDetail from './pages/CityDetail.jsx'
import CityDetailTime from './pages/CityDetailTime.jsx'
import CityDetailDays from './pages/CityDetailDays.jsx'
import WeatherMapContain from './pages/WeatherMapContain.jsx'

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
      },
      {
        path: '/:cityName/Tomorrow',
        element: <CityDetailTime />
      },
      {
        path: '/:cityName/:days',
        element: <CityDetailDays />
      },
      {
        path: '/WeatherMap',
        element: <WeatherMapContain />
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
