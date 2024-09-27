


import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useTodo } from '../../hooks/useTodo';
import { Draggable, Droppable, FloatingButton, LoadingIcon, LogOutIcon, PlusIcon } from '../../ui';
import { CustomButton } from '../../ui/components/CustomButton';
import { ModalSaveTask } from '../components/ModalSaveTask';
import { Task } from '../components/Task';

export const TodoPage = () => {

    const { dispatchLogOut, user } = useAuth();
    const { todos, isLoading, dispatchLoadTasks, saveTaskModal, disptachShowModalSaveTask, dispatchSetCurrentUpdate, dispatchClearCurrentUpdate, dispatchDeleteTask, dispatchDragEndTask, dispatchCleanTodosUser } = useTodo();

    const mouseSensor = useSensor( MouseSensor, {

      activationConstraint: {
        delay: 80,
        tolerance: 5,
      }
      
    });

    const sensors = useSensors( mouseSensor );

    useEffect(() => {
      dispatchLoadTasks();
    }, []);
    

    const onLogOut = () => {
        dispatchLogOut();
        dispatchCleanTodosUser();
    }

    const showModalSaveTask = () => {
      dispatchClearCurrentUpdate();
      disptachShowModalSaveTask(true);
    }

    const onShowEditTask = ( task ) => {
      dispatchSetCurrentUpdate( task );
    }

    const onDeleteTask = ( id ) => {
      dispatchDeleteTask( id );
    }

    const onDragEndTask = ( e ) => {
      
      const { active: {id}, over: {id: idOver} } = e;
      const[ idTask, idCurrentOver ] = id.split('-');
      if( idCurrentOver === idOver ) return;
      dispatchDragEndTask({ idTask, idOver, idCurrentOver });
    }


  return (


    <>
      <div className='py-2 px-5 shadow-lg flex items-center justify-between'>


        <span className='text-2xl font-extrabold'>TodoApp</span>

        <span className='text-lg min-w-16'>{user.name}</span>
        <div className='flex items-center justify-between gap-2'>
          <CustomButton
            bgColor='bg-indigo-800'
            icon={
              <LogOutIcon />
            }
            showIcon
            onClick={onLogOut}
          />
        </div>


      </div>

      
      {
        isLoading ? (
          <div className='flex items-center justify-center mt-6'>
            <LoadingIcon color='blue' size={80} />
          </div>
        )
        :
        (
          <>
            <section className='container py-4 mx-auto relative'>

            <DndContext
              onDragEnd={ onDragEndTask }
              sensors={sensors}

            >
              <div className='flex items-center gap-6'>

                {
                  Object.keys( todos ).map( key => (

                    <Droppable
                      idDroppable={ todos[ key ].id }
                      key={key}
                    >
                      <div className='flex-1 rounded-xl border  h-[calc(100svh-9rem)]'>

                        <h3 className=' text-center rounded-t-xl bg-white text-xl font-semibold relative py-4 after:absolute after:h-1 after:bg-indigo-800 after:left-0 after:right-0 after:bottom-0'>
                          { todos[key].title }
                        </h3>

                        <div className='flex flex-col items-center gap-4 w-full pt-4 px-3'>
                          {
                            todos[key].tasks.map( task => (

                              <Draggable key={task.id} idDraggable={`${task.id}-${key}`}>
                                <Task onDeleteTask={ () => onDeleteTask( task.id ) } onEditTask={ () => onShowEditTask( task ) } title={task.title} description={task.description} state={task.state} />
                              </Draggable>

                            ))
                          }

                        </div>


                      </div>

                    </Droppable>

                  
                  ))
                }

              </div>
            </DndContext>




            </section>



            {
            saveTaskModal && (
            <ModalSaveTask />
            )
            }


            <FloatingButton
            icon={<PlusIcon />}
            onClick={showModalSaveTask}
            />
          </>
        )
      }
      



    </>




    
    


  )
}



