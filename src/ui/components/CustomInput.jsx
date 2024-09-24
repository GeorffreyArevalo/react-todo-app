

export const CustomInput = ({ name, label, type, register, errors, validations }) => {
  return (
    <div className='mb-6'>
        <label htmlFor={name} className='block text-base mb-2'>{label}</label>
        <input type={type} id={name} placeholder={label} {...register( name, validations )} 
        className={`w-full py-3 px-6 text-lg rounded-full border ${ !!errors[name] ? 'border-red-200 focus-visible:outline-red-600' : 'border-indigo-200 focus-visible:outline-indigo-700' } `} />

        {
          errors[name] &&
          <p className="text-sm text-red-600">{ errors[name].message }</p>
        }

    </div>
  )
}


