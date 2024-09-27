import React from 'react'
import { TrashIcon } from '../../ui'

export const Task = ({ title, description, state, onEditTask, onDeleteTask }) => {
  return (
    <div onDoubleClick={ onEditTask } className={`show-lg w-full rounded-xl border overflow-hidden bg-white py-4 px-6 relative after:w-1.5 after:top-0 after:bottom-0 after:left-0 after:absolute ${ state === 'Finished' ? 'after:bg-green-700' : 'after:bg-pink-700' }`}>

        <h4 className=' text-lg font-medium'>{title}</h4>

        <div className='flex gap-6 justify-between items-end'>

            <p className='text-left'>{description}</p>

            <button onClick={ onDeleteTask } className='text-red-700 border p-2 rounded-xl transition-all hover:bg-gray-100'>
              <TrashIcon />
            </button>

        </div>

    </div>
  )
}


