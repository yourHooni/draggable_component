import React, { ReactNode, MouseEvent } from "react";

type DraggableProps = {
  children: ReactNode,
};
export default class Draggable extends React.Component<DraggableProps> {
  state = {
    diffX: 0,
    diffY: 0,
    dragging: false,
    styles: {}
  };

  handleStartDrag = (e: MouseEvent) => {
    this.setState({
        diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
        diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
        dragging: true
    });
  }

  handleDragging = (e: MouseEvent) => {
    this.setState({
        diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
        diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
        dragging: true
    });
  }

  handleEndDrag = (e: MouseEvent) => {
    this.setState({
        diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
        diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
        dragging: true
    });
  }

  render() {
    return (
      <div 
        onMouseDown={(e: MouseEvent) => {this.handleStartDrag(e)}}
        onMouseMove={(e: MouseEvent) => {this.handleDragging(e)}}
        onMouseUp={(e: MouseEvent) => {this.handleEndDrag(e)}}
      >
        {this.props.children}
      </div>
    );
  }
}
