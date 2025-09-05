import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const PlusNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={PlusNum}>+</button>
    </>
  );
};

export default Count;
