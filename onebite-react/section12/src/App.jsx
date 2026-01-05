import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
  {
    id: 4,
    createdDate: new Date().getTime(),
    emotionId: 4,
    content: "4번 일기 내용",
  },
];

function reducer(state, action) {
  return state;
}

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary/:id" : 일기장을 상세히 조회하는 Diary 페이지
// 4. "/edit/:id" : 일기장을 수정하는 Edit 페이지
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <>
      <Header
        title="Header"
        leftChild={<Button text="Left" />}
        rightChild={<Button text="Right" />}
      />

      <Button
        text="123"
        type="DEFAULT"
        onClick={() => console.log("DEFAULT")}
      />
      <Button
        text="123"
        type="POSITIVE"
        onClick={() => console.log("POSITIVE")}
      />
      <Button
        text="123"
        type="NEGATIVE"
        onClick={() => console.log("NEGATIVE")}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
