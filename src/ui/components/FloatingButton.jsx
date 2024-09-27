import React from 'react'

export const FloatingButton = ({ icon, onClick }) => {
  return (
    <button className='absolute bottom-4 right-4 bg-pink-700 text-white p-3 rounded-full shadow-xl transition-all hover:bg-pink-700/90' onClick={onClick}>
        {icon}
    </button>
  )
}
