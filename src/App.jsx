import { useState } from 'react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './Pages/Landing/Landing'
import { Register } from './Pages/Register/Register'
import { Home } from './Pages/Home/Home'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from './Styles/GlobalStyles'

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} toast={toast} />} />
        <Route path="/register" element={<Register toast={toast} />} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
