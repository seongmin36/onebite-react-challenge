import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ content, date, id, isDone, onUpdate, onDelete }) => {
  return (
    <div className="TodoItem">
      <input onChange={() => onUpdate(id)} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
};

// 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
export default memo(TodoItem);
// T -> Props 바뀌지  않음 -> 리렌더링 X
// F -> Props 바뀜 -> 리렌더링 O
// if (prevProps.id !== nextProps.id) return false;
// if (prevProps.content !== nextProps.content) return false;
// if (prevProps.isDone !== nextProps.isDone) return false;
// if (prevProps.date !== nextProps.date) return false;
// return true;

// memo 메서드는 얕은비교(===)를 하기 때문에 call by value(Object 타입)로 호출된 다른 메서드(onUpdate, onDelete)가
// 주소값이 달라 다른 값으로 판단하여 매번 리렌더링을 시도함.
// -> memo() 내부에 콜백함수를 넣게 되면 memo가 얕은 비교를 하는게 아니라,
// ()=>{} 콜백함수에 선언된 조건에 따라 판단함.
