import { useState, useCallback } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = useCallback((value) => {
    setCount((prev) => prev + value);
  }, []);

  return (
    <div className="mx-auto p-[20px] w-[400px]">
      <h1 className="text-4xl font-bold py-[20px]">Simple Counter</h1>
      <Viewer count={count} />
      <Controller onClickButton={onClickButton} />
    </div>
  );
}

export default App;
