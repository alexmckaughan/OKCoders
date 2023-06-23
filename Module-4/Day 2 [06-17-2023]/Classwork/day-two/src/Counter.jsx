import { useState } from 'react';

const Counter = () => {
  // All hooks start with "use," State is...
  const [counter,setCounter] = useState(0);
  
  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  console.log(counter);
  return (
    <>
    <div>{counter}</div>
    <button onClick={increaseCounter}>Increase Counter</button>
    </>
    );
};

export default Counter;
