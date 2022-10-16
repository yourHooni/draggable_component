import React, { ReactNode } from "react";

interface DraggableProps {
    children?: ReactNode;
}


const Draggable: React.FC<DraggableProps> = ({
    children
}) => {
  return (
    <>
      {children}
    </>
  )
}

export default Draggable;