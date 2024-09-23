

export const CustomInput = ({ name, label, type }) => {
  return (
    <div className='mb-6'>
        <label htmlFor={name} className='block text-base mb-2'>{label}</label>
        <input type={type} id={name} placeholder={label} name={name} className='w-full py-3 px-6 text-lg rounded-full border border-indigo-200 focus-visible:outline-indigo-700' />
    </div>
  )
}


