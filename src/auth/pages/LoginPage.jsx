

import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton, CustomInput } from '../../ui'
import { AuthLayout } from '../layouts/AuthLayout'

export const LoginPage = () => {
  return (

    <AuthLayout
        title='Iniciar Sesión'
        description='Ingrese su Usuario y Contraseña para Iniciar Sesión'
    >
        <form className='mt-9'>

            <CustomInput
                name='username'
                label='Usuario'
                type='text'
            />

            <CustomInput
                name='password'
                label='Contraseña'
                type='password'
            />

            <CustomButton
                type='submit'
                bgColor='bg-indigo-800'
                text='Iniciar Sesión'
            />

            <p className="font-light text-lg text-gray-500 text-center">¿No Tienes una Cuenta? <Link to='/auth/create-account' className="text-indigo-800">Crear Una</Link> </p>

        </form>
    </AuthLayout>

    
            


  )
}

