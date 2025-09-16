import { useState } from 'react';
import './App.css';
import Editer from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import { useRef } from 'react';
import Exam from './components/Exam';

function App() {
  const [todos, setTodos] = useState([]);
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

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetid와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Exam />
      {/* <Header />
      <Editer onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
    </div>
  );
}

export default App;
