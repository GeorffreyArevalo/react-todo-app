import { Link } from "react-router-dom"
import { CustomButton, CustomInput } from "../../ui"
import { AuthLayout } from "../layouts/AuthLayout"

export const CreateAccountPage = () => {
  return (
    <AuthLayout
        title='Crear Cuenta'
        description='Cree una cuenta y gestione sus actividades.'
    >

        <form className="mt-9">

            <CustomInput
                label='Nombre'
                name='name'
                type='text'
            />

            <CustomInput
                label='Usuario'
                name='username'
                type='text'
            />

            <CustomInput
                label='Contraseña'
                name='password'
                type='password'
            />

            <CustomButton
                text='Crear Cuenta'
                bgColor='bg-indigo-800'
                type="button"
            />

            <p className="font-light text-lg text-gray-500 text-center"> ¿Tienes una Cuenta? <Link to='/auth/login' className="text-indigo-800">Iniciar Sesión</Link> </p>

        </form>

    </AuthLayout>
  )
}
