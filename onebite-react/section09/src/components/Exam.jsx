import { useReducer } from 'react';

// reducer: 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer() {}

const Exam = () => {
  // dispatch: 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{state}</h1>
      <button>+</button>
    </div>
  );
};

export default Exam;
