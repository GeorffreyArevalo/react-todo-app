
import React from 'react'

export const CustomButton = ({ text, type = 'button', bgColor, disabled = false, icon, showIcon = false, onClick }) => {
  return (
    <button
        type={type}
        className={`flex items-center justify-center gap-2 w-full py-3 px-7 ${bgColor} font-bold text-white my-4 rounded-full transition-all hover:opacity-95 hover:shadow-lg disabled:opacity-55`}
        disabled={disabled}
        onClick={onClick}
    >{text}

      {
        (!!icon && showIcon) && (
          <span>{icon}</span>
        )
      }
    
    </button>
  )
}

