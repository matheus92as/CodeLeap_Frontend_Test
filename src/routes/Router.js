import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Signup from '../pages/Signup/Signup'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router