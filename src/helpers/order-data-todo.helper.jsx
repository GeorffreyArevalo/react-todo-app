

export const orderDataTodo = ( todos = [] ) => {

    const data = {
        Pending: {
            id: 'Pending',
            title: 'Pendiente',
            tasks: []
        },
        Process: {
            id: 'Process',
            title: 'En Proceso',
            tasks: []
        },
        Finished: {
            id: 'Finished',
            title: 'Finalizado',
            tasks: []
        }
    }

    todos.forEach( todo => {
        data[ todo.state ].tasks.push(todo);
    });

    return data;
}

