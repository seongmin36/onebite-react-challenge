import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');
  const PlusNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={() => setLight(light === 'OFF' ? 'ON' : 'OFF')}>
          전구 {light === 'OFF' ? '켜기' : '끄기'}
        </button>
      </div>
      <h1>{count}</h1>
      <button onClick={PlusNum}>+</button>
    </>
  );
}

export default App;
