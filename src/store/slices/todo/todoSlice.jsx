import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({

    name: 'todo',
    initialState: {
        todos: {},
        isLoading: true,
        isSavingTask: false,
        saveTaskModal: false,
        currentUpdate: {}
    },
    reducers: {

        onLoadTasks: ( state, { payload } ) => {
            state.todos = {...payload};
            state.isLoading = false;
        },
        onIsLoading: ( state ) => {
            state.isLoading = true;
        },
        onIsSavingTask: ( state, { payload } ) => {
            state.isSavingTask = payload;
        },
        onIsSaveTaskModal: ( state, { payload } ) => {
            state.saveTaskModal = payload;
        },
        onSaveTask: (state, { payload }) => {
            state.todos[ payload.state ].tasks = [ ...state.todos[ payload.state ].tasks, payload ];
            state.isSavingTask = false;
            state.saveTaskModal = false;
        },
        onUpdateTask: ( state, { payload } ) => {
            state.todos[ state.currentUpdate.state ].tasks = state.todos[ state.currentUpdate.state ].tasks.filter( task => task.id !== payload.id );
            state.todos[ payload.state ].tasks = [ ...state.todos[ payload.state ].tasks, payload ];
            state.isSavingTask = false;
            state.saveTaskModal = false;
        },
        onDeleteTask: (state, { payload }) => {
            state.todos[ payload.state ].tasks = state.todos[ payload.state ].tasks.filter( task => task.id !== payload.id );
        },
        onSetCurrentUpdate: (state, {payload}) => {
            state.currentUpdate = payload;
        },
        onDragEndTask: (state, { payload }) => {
            state.todos[ payload.idCurrentOver ].tasks = state.todos[ payload.idCurrentOver ].tasks.filter( task => task.id !== payload.idTask );
            state.todos[ payload.idOver ].tasks = [ ...state.todos[ payload.idOver ].tasks, payload.task ];
        }
    }

});

export const {
    onIsLoading,
    onLoadTasks,
    onIsSaveTaskModal,
    onIsSavingTask,
    onSaveTask,
    onUpdateTask,
    onSetCurrentUpdate,
    onDeleteTask,
    onDragEndTask,
} = todoSlice.actions;

