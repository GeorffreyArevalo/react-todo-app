

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import todoApi from '../apis/todoApi';
import { orderDataTodo } from '../helpers';
import { onDeleteTask, onDragEndTask, onIsLoading, onIsSaveTaskModal, onIsSavingTask, onLoadTasks, onSaveTask, onSetCurrentUpdate, onUpdateTask } from '../store';

export const useTodo = () => {
  
    const { todos, isLoading, isSavingTask, saveTaskModal, currentUpdate } = useSelector( state => state.todo );
    const dispatch = useDispatch();

    const permitStates = [ 'Pending', 'Finished', 'Process' ];


    const dispatchLoadTasks = async() => {

        dispatch( onIsLoading() );

        try {
            
            const { data } = await todoApi.get('/task/by/user');
            const dataTodo = orderDataTodo( data.tasks );
            dispatch( onLoadTasks( dataTodo ) );
        } catch (error) {
            console.log(error);
            const dataError = error.response?.data ?? {};
            toast.error( dataError.msg ?? 'Error al cargar los todos', {
                position: 'top-right'
            });
        }
    }

    const dispatchSaveTask = async ({ title, description, state }) => {


        dispatch( onIsSavingTask( true ) );
        if( !permitStates.includes(state) ){
            return toast.warning('Estado de la tarea es inválido', {
                position: 'top-right'
            });
        }

        try {
            
            const { data } = await todoApi.post('/task', {
                title, description, state
            });
            dispatch( onSaveTask( data.task ) );

        } catch (error) {
            console.log(error)
            const dataError = error.response?.data ?? {};
            toast.error( dataError.msg ?? 'Error al guardar la tarea.', {
                position: 'top-right'
            });
        }


    }

    const dispatchUpdateTask = async( { title, description, state } ) => {

        dispatch( onIsSavingTask(true) );

        try {
            const {data} = await todoApi.put(`/task/${currentUpdate.id}`, { state, title, description });
            dispatch( onUpdateTask( data.task ) );
        } catch (error) {
            console.log(error);
            const dataError = error.response?.data ?? {};
            toast.error( dataError.msg ?? 'Error al guardar la tarea.', {
                position: 'top-right'
            });
            dispatch( onIsSavingTask(false) );
        }

    }


    const dispatchDeleteTask = async( id ) => {

        toast.promise( todoApi.delete(`/task/${id}`), {
            loading: 'Eliminando tarea...',
            success: ( {data} ) => {
                dispatch( onDeleteTask( data.task ) );
                return 'Tarea eliminada correctamente'
            },
            error: 'Error al eliminar la tarea.',
            position: 'top-right',
        });
    }

    const dispatchDragEndTask = async ({ idTask, idCurrentOver, idOver }) => {
        let task = todos[ idCurrentOver ].tasks.find( task => task.id === idTask );
        task = { ...task, state: idOver };
        dispatch( onDragEndTask( { idTask, task, idCurrentOver, idOver } ) );

        try {
            await todoApi.put(`/task/${ task.id }`, task);
        } catch (error) {
            const dataError = error.response?.data ?? {};
            toast.error( dataError.msg ?? 'Error al guardar la tarea.', {
                position: 'top-right'
            });
        }


    }

    const dispatchSetCurrentUpdate = ( task ) => {
        dispatch( onSetCurrentUpdate( task ) );
        dispatch( onIsSaveTaskModal( true ) );
    }

    const dispatchClearCurrentUpdate = () => {
        dispatch( onSetCurrentUpdate({}) );
    }

    const disptachShowModalSaveTask = ( value ) => {
        dispatch( onIsSaveTaskModal(value) );
    }

    const dispatchCleanTodosUser = () => {
        dispatch( onLoadTasks({}) );
    }

  
    return {

        todos,
        isLoading,
        isSavingTask,
        saveTaskModal,
        currentUpdate,

        dispatchLoadTasks,
        dispatchSaveTask,
        disptachShowModalSaveTask,
        dispatchClearCurrentUpdate,
        dispatchSetCurrentUpdate,
        dispatchUpdateTask,
        dispatchDeleteTask,
        dispatchDragEndTask,
        dispatchCleanTodosUser,

    }
}

