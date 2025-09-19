import { createContext } from "react";
import "./App.css";
import Editer from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useRef, useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
}

// Data를 하위에 전달하기 위한 전역 상태 관리를 위해 App() 바깥에 생성
export const TodoContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: Date.now(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    // todos State의 값들 중에
    // targetid와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  useCallback(() => {}, []);

  return (
    <div className="App">
      <Header />
      {/* Provider 태그로 감싸진 영역 내에서 모두 데이터 공유 (value 속성 내에 모든 객체, 함수) */}
      <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <Editer />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
