import { useEffect, useState } from "react";

const WindowSizer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0); 

  console.log(width);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    // cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Use functional update to avoid needing 'counter' as a dependency
    setCounter((prevCounter) => prevCounter + 1);
  }, [width]);  // 'counter' is not in the dependency array anymore

  return (
    <>
      <div>Window Width: {width}</div>
      <div>Another Counter: {counter}</div>
    </>
  );
};

export default WindowSizer;
