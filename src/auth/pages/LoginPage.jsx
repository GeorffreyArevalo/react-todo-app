

import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { CustomButton, CustomInput } from '../../ui'
import { AuthLayout } from '../layouts/AuthLayout'

export const LoginPage = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm();

    const onCustomSubmit = ( data ) => {
        console.log(data);
    }

  return (

    <AuthLayout
        title='Iniciar Sesión'
        description='Ingrese su Usuario y Contraseña para Iniciar Sesión'
    >
        <form className='mt-9' onSubmit={ handleSubmit( onCustomSubmit ) }>

            <CustomInput
                name='username'
                label='Usuario'
                type='text'
                errors={ errors }
                validations={{
                    required: {
                        value: true,
                        message: 'El nombre de usuario es requerido'
                    },
                    minLength: {
                        value: 3,
                        message: 'El nombre de usuario requiere mínimo tres caracteres.'
                    }
                }}
                register={ register }
            />

            <CustomInput
                name='password'
                label='Contraseña'
                type='password'
                errors={ errors }
                validations={{
                    required: {
                        value: true,
                        message: 'La contraseña es requerida.'
                    },
                    minLength: {
                        value: 8,
                        message: 'La contraseña requiere mínimo 8 caracteres.'
                    }
                }}
                register={ register }
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

