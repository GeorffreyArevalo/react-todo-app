
import React from 'react'

export const CustomButton = ({ text, type = 'button', bgColor }) => {
  return (
    <button
        type={type}
        className={`block w-full py-3 px-7 ${bgColor} font-bold text-white my-4 rounded-full transition-all hover:opacity-95 hover:shadow-lg`}
    >{text}</button>
  )
}

