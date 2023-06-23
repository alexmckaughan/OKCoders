import { useEffect } from "react";

const Input = ({ value, onChange }) => {

  useEffect(() => {
    console.log(value);
  }, [value]);  // Add value to the dependency array

  return (
    <input 
      value={value} 
      onChange={onChange}
    />
  );
}

export default Input;
