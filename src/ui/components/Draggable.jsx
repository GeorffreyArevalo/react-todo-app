import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";


export const Draggable = ({ children, idDraggable }) => {
  
    const { attributes, listeners, transform, isDragging, setNodeRef } = useDraggable({
        id: idDraggable,
    });

    const style = {
        transform: CSS.Translate.toString( transform ),
    }
  
    return (
        <div
            {...attributes}
            {...listeners}
            ref={ setNodeRef }
            style={ style }
            className={`w-full ${isDragging && 'z-50'}`}
        >
            {children}
        </div>
    )
}
