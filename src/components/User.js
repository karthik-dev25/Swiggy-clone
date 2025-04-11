import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    console.log("useEffect");
    return ()=>{
      console.log("Component Will Unmount")
    }
  },[]);
  console.log("Render")
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Count2:{count2}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>Name: {name}</h1>
      <h3>Location: Chennai</h3>
      <h3>Contact: @karthik0388</h3>
    </div>
  );
};

export default User;
