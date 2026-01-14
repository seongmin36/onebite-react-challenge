import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  const navigate = useNavigate();
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>일기를 불러오는 중입니다...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => navigate(-1)} />}
        rightChild={
          <Button
            text={"수정하기"}
            onClick={() => navigate(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer
        emotionId={emotionId}
        createdDate={createdDate}
        content={content}
      />
    </div>
  );
};

export default Diary;
