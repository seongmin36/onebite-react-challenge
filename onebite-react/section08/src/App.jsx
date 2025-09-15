import { useState } from "react";
import "./App.css";
import Editer from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useRef } from "react";

const mockData = [
  {
    id: 0,
    content: "React 공부하기",
    date: new Date().getTime(),
    isDone: true,
  },
  {
    id: 1,
    content: "React 공부하기",
    date: new Date().getTime(),
    isDone: true,
  },
  {
    id: 2,
    content: "React 공부하기",
    date: new Date().getTime(),
    isDone: true,
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    // 새로운 데이터를 배열 앞에 위치
    setTodos((todos) => [newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editer onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
