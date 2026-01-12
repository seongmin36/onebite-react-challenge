import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        title="새 일기 쓰기"
        leftChild={<Button text={"< 뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <Editor />
    </div>
  );
};

export default New;
