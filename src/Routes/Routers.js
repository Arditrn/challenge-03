import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Homepage } from '../Pages/Homepage/Homepage';
import { Login } from '../Pages/Login/Login';



export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/homepage" element={<Homepage/>} />
        

    </Routes>
  )
}