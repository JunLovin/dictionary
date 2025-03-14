import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import routes from './routes'
import UseFont from '@context/UseFont'
import UseWord from '@context/UseWord'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <UseWord>
        <UseFont>
          <RouterProvider router={router}/>
        </UseFont>
      </UseWord>
  </StrictMode>,
)