
import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CreateAccountPage } from '../auth/pages/CreateAccountPage'
import { LoginPage } from '../auth/pages/LoginPage'
import { useAuth } from '../hooks/useAuth'
import { TodoPage } from '../todo/pages/TodoPage'

export const RoutesApp = () => {

  const { state, dispatchCheckAuth } = useAuth();

  useEffect(() => {
    dispatchCheckAuth();
  }, []);
  


  return (
    
    <Routes>

      {

        (state === 'authenticated')
        ?
        <>
          <Route path='/todos' element={ <TodoPage /> } />
          <Route path='/*' element={<Navigate to='/todos' />} />
        </>
        : <>
          <Route path='/auth/login' element={ <LoginPage /> } />
          <Route path='/auth/create-account' element={ <CreateAccountPage /> } />
          <Route path='/*' element={ <Navigate to='/auth/login' /> } />
        </>


      }





    </Routes>


  )
}


