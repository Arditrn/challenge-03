import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Cars } from '../Pages/Cars/Cars';
import { Dashboard } from '../Pages/Dashboard/Dashboard';
import { Homepage } from '../Pages/Homepage/Homepage';
import { Login } from '../Pages/Login/Login';



export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/cars" element={<Cars/>} />
        

    </Routes>
  )
}