import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CustomButton, CustomInput, LoadingIcon } from "../../ui";
import { AuthLayout } from "../layouts/AuthLayout";

export const CreateAccountPage = () => {

    const { state, dispatchAuthCreateAccount } = useAuth();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();

    const onCustomSubmit = ( data ) => {

        if(isValid){
            dispatchAuthCreateAccount(data);
        }

    }


  return (
    <AuthLayout
        title='Crear Cuenta'
        description='Cree una cuenta y gestione sus actividades.'
    >

        <form className="mt-9" onSubmit={ handleSubmit( onCustomSubmit )} >

            <CustomInput
                label='Nombre'
                name='name'
                type='text'
                errors={ errors }
                validations={{
                    required: {
                        value: true,
                        message: 'El nombre es requerido'
                    },
                    minLength: {
                        value: 3,
                        message: 'El nombre requiere mínimo tres caracteres.'
                    }
                }}
                register={ register }
            />

            <CustomInput
                label='Usuario'
                name='username'
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
                label='Contraseña'
                name='password'
                type='password'
                errors={ errors }
                validations={{
                    required: {
                        value: true,
                        message: 'La contraseña es requerida'
                    },
                    minLength: {
                        value: 8,
                        message: 'La contraseña requiere mínimo 8 caracteres.'
                    }
                }}
                register={ register }
            />

            <CustomButton
                text='Crear Cuenta'
                bgColor='bg-indigo-800'
                type="submit"
                icon={ <LoadingIcon /> }
                disabled={ state === 'checking' }
                showIcon={ state === 'checking' }
            />

            <p className="font-light text-lg text-gray-500 text-center"> ¿Tienes una Cuenta? <Link to='/auth/login' className="text-indigo-800">Iniciar Sesión</Link> </p>

        </form>

    </AuthLayout>
  )
}
