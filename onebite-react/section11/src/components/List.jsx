import { useState, useContext } from 'react';
import './List.css';
import TodoItem from './TodoItem';
import { useMemo } from 'react';
import { TodoStateContext } from '../App';

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      // 대소문자 구별 X
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 리렌더링 될때마다 호출
  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('getAnalyzedData 호출');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length; // filter() 메서드는 배열 길이가 길어질수록 순회하여 계산하기 때문에 굉장히 오래걸림
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]); // todos가 바뀔때만 실행

  // 의존성 배열: deps -> 의존성 배열이 변경될때만 useMemo()가 동작 useEffect()와 동일 (라이프사이클 mount, unmount)

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChange}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          // 스프레드 연산자로 todo 배열 전달
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default List;
