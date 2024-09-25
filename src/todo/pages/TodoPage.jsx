


import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { CustomButton } from '../../ui';

export const TodoPage = () => {

    const { dispatchLogOut } = useAuth();

    const onLogOut = () => {
        dispatchLogOut();
    }

  return (
    
    <CustomButton
        text='LogOut'
        bgColor='bg-indigo-800'
        type='button'
        onClick={ onLogOut }
    />


  )
}



