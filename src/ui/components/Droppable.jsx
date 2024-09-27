

import { useDroppable } from '@dnd-kit/core';
import React from 'react';

export const Droppable = ({ children, idDroppable }) => {

    const { isOver, setNodeRef } = useDroppable({
        id: idDroppable,
    });

    const bg = `${ isOver ? 'bg-slate-200' : 'bg-slate-100' }`


  return (

    <div ref={ setNodeRef } className={` ${bg} w-full rounded-xl `}>
        {children}
    </div>

  )
}

