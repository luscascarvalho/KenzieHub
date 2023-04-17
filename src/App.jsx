import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { Landing } from './Pages/Landing/Landing'
import { Register } from './Pages/Register/Register'
import { Home } from './Pages/Home/Home'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from './Styles/GlobalStyles'
import { TechProvider } from './Providers/TechProviders'
import { ProtectedRoute } from './Pages/ProtectedRoute/ProtectedRoute'
import { PublicRoutes } from './Pages/PublicRoutes/PublicRoutes'

const App = () => {


  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<PublicRoutes />} >
          <Route index element={<Landing />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/home" element={<ProtectedRoute />} >
          <Route index element={
            <TechProvider>
              <Home />
            </TechProvider>} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
