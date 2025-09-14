import { useState, useCallback } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useEffect } from "react";
import { useRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링 (deps 생략)
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음

  // 2번째 전달한 의존성 배열에 따라 의존하여 변함

  // useCallback()을 이용한 데이터 상태 메모이제이션 최적화
  const onClickButton = useCallback((value) => {
    // 비동기로 동작하는 useState의 setCount 함수 => console.log(count)를 찍으면 이전의 값이 출력됨. : useEffect 사용 이유
    setCount((prev) => prev + value);
  }, []);

  return (
    <div className="mx-auto p-[20px] w-[400px]">
      <h1 className="text-4xl font-bold py-[20px]">Simple Counter</h1>
      <section className="rounded-md border-none mb-[10px] bg-gray-100 p-[20px]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border"
        />
      </section>
      <Viewer count={count} />
      {count % 2 === 0 ? <Even /> : null}
      <Controller onClickButton={onClickButton} />
    </div>
  );
}

export default App;
