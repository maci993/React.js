import React from "react"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './router/Home'
import SignUp from './router/SignUp'
import LogIn from './router/LogIn'
import AuthProvider from './hooks/AuthProvider'

function App() {
 

  return (
   <BrowserRouter>
   <AuthProvider>
    <Routes path="*">
      <Route exact path="/" element={<Home />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/login" element={<LogIn />} />
    </Routes>
   </AuthProvider>
   </BrowserRouter>
  )
}

export default App
