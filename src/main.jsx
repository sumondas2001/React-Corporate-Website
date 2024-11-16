import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import ServiceQuoteFromContext from './ServiceDetailsProvider/ServiceQuoteFromContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <ServiceQuoteFromContext>

      <AuthProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </ServiceQuoteFromContext>

  </StrictMode>,
)
