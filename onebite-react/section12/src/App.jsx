import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기장을 상세히 조회하는 Diary 페이지
function App() {
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
