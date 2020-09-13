import React, { useRef, useState, useEffect } from "react";

const quickAndDirtyStyle = {
  //   width: "200px",
  //   height: "200px",
  //   background: "#FF9900",
  //   color: "#FFFFFF",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  zIndex: "0",
};

const DraggableComponent = (props) => {
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef();

  // Monitor changes to position state and update DOM
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  // Update the current position if mouse is down
  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };

  return (
    <div
      ref={ref}
      style={quickAndDirtyStyle}
      onMouseMove={onMouseMove}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {/* <p>{pressed ? "Dragging..." : "Press to drag"}</p> */}

      {pressed ? props.children : props.children}
    </div>
  );
};

export default DraggableComponent;
