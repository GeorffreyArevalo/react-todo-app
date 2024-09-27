import { useForm } from "react-hook-form";
import { useTodo } from "../../hooks/useTodo";
import { CloseIcon, CustomButton, CustomInput, LoadingIcon } from "../../ui";

export const ModalSaveTask = () => {

    const { isSavingTask, disptachShowModalSaveTask, dispatchSaveTask, currentUpdate, dispatchClearCurrentUpdate, dispatchUpdateTask } = useTodo();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
      values: currentUpdate
    });

    const onCloseModal = () => {
      disptachShowModalSaveTask(false);
      dispatchClearCurrentUpdate();
    }

    const handleSavaTask = ( data ) => {

        if( isValid ){

          if(!!currentUpdate.id){
            dispatchUpdateTask(data);
            return;
          }
          dispatchSaveTask( data );
        }

    }


  return (
    <div className='absolute bottom-0 top-0 left-0 right-0 z-10 flex items-center justify-center bg-black/50'>

          <section className='w-full max-w-96 bg-white p-6 rounded-xl animate__animated animate__fadeIn'>

            <div className="flex justify-end">

                <button onClick={onCloseModal} className="border p-2 rounded-xl transition-all hover:bg-gray-100">

                    <CloseIcon />

                </button>

            </div>



            <h3 className='text-center font-bold text-2xl text-indigo-700 mb-3'>Guardar Tarea</h3>

            <form
                onSubmit={handleSubmit(handleSavaTask)}
            >

              <CustomInput
                label={'Titulo'}
                name='title'
                type='text'
                register={register}
                errors={errors}
                validations={{
                  required: {
                    value: true,
                    message: 'El título es requerdio'
                  },
                  minLength: {
                    value: 3,
                    message: 'Debe contener mínimo 3 caracteres.'
                  }
                }}
              />

              <CustomInput
                label={'Descripción'}
                name='description'
                type='text'
                register={register}
                errors={errors}
              />

              <div className='mb-6'>

                <label htmlFor="state" className='block text-base'>Estado</label>

                <select
                  id="state"
                  {...register('state')}
                  className={`w-full py-3 px-6 text-lg rounded-full border ${ !!errors['state'] ? 'border-red-200 focus-visible:outline-red-600' : 'border-indigo-200 focus-visible:outline-indigo-700' } bg-transparent appearance-none`}
                >

                  <option value="Pending">Pendiente</option>
                  <option value="Process">En Proceso</option>
                  <option value="Finished">Finalizado</option>

                </select>
                
              </div>

              <CustomButton
                type='submit'
                bgColor={'bg-pink-700'}
                text={'Guardar'}
                disabled={ isSavingTask }
                showIcon={ isSavingTask }
                icon={<LoadingIcon />}
              />

            </form>

          </section>



        </div>
  )
}
