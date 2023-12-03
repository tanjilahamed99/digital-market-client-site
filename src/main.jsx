import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider'
import 'aos/dist/aos.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Aos from 'aos'

const queryClient = new QueryClient()
Aos.init()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
