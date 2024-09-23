
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CreateAccountPage } from '../auth/pages/CreateAccountPage'
import { LoginPage } from '../auth/pages/LoginPage'

export const RoutesApp = () => {
  return (
    
    <Routes>
        <Route path='/auth/login' element={ <LoginPage /> } />
        <Route path='/auth/create-account' element={ <CreateAccountPage /> } />
        <Route path='/*' element={ <Navigate to='/auth/login' /> } />
    </Routes>


  )
}


