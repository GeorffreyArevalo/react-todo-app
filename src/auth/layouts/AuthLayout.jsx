
export const AuthLayout = ({ children, title, description }) => {
  return (
    <section className='h-svh w-full flex items-center justify-center bg-slate-200'>

        <div className='p-16 bg-white max-w-xl shadow-lg rounded relative overflow-hidden animate__animated animate__fadeInDown'>

            <div className='flex items-center justify-stretch absolute top-0 left-0 w-full'>
                <span className='block h-2 flex-1 bg-indigo-800'></span>
                <span className='block h-2 flex-1 bg-pink-600'></span>
            </div>

            <h3 className='text-4xl font-medium mb-4 text-center'>{title}</h3>
            <p className='font-light text-gray-700 text-center'>{description}</p>
            <hr className='my-2' />

            {children}


        </div>

    </section>
  )
}


