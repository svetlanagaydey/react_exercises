import React, { useRef } from "react";
import "./style.css";

export default function ImageToogle () {
    const firstRef = useRef();
    const secondRef = useRef();

    const changeColor = (currentClass) => {
        if (currentClass === "first") {
            firstRef.current.className = "firstHover";
        } else {
            firstRef.current.className = "first";
        }
    }   
    const backColor = (currentClass => {
        if (currentClass === "second") {
            secondRef.current.className = "secondHover";
        } else {
            secondRef.current.className = "second";
        }
    }) 
    
return (
    <div>
        <div
          ref={firstRef}
          className="first"
          onMouseEnter={(e) => changeColor(e.target.className)}
          onMouseLeave={(e) => changeColor(e.target.className)}
        ></div>
        <div
          ref={secondRef}
          className="second"
          onMouseEnter={(e) => backColor(e.target.className)}
          onMouseLeave={(e) => backColor(e.target.className)}
        ></div>
    </div>
  );
};