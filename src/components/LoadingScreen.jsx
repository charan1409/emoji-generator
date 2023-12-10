import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (circleSize >= 50) {
        setCircleSize(0);
      } else {
        setCircleSize(circleSize + 2);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [circleSize]);

  return (
    <div className="loading-screen">
      <div className="loading-text">
      Compiling code, chasing semicolons... Hang tight!
      </div>
      <div className="circles-container">
        <div
          className="circle"
          style={{ transform: `scale(${circleSize / 50})` }}
        ></div>
        <div
          className="circle"
          style={{ transform: `scale(${circleSize / 50 - 0.2})` }}
        ></div>
        <div
          className="circle"
          style={{ transform: `scale(${circleSize / 50 - 0.4})` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
