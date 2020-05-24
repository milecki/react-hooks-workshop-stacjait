import React, { useState, useEffect } from 'react';

function WindowResize() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWIndowResize = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWIndowResize);

    return () => {
      window.removeEventListener('resize', handleWIndowResize);
    };
  }, []);

  return (
    <div>
      <h2>Window Resize</h2>
      <>
        {windowWidth} x {windowHeight}
      </>
    </div>
  );
}

export default WindowResize;
