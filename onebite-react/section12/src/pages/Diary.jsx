import { useParams, useSearchParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);

  // 쿼리스트링 조회
  const [queryString, setQueryString] = useSearchParams();
  // 쿼리스트링 수정
  setQueryString("value", "1234");
  console.log(queryString.get("value"));

  return (
    <div>
      Diary {params.id}번 일기입니다~ {queryString.get("value")}
    </div>
  );
};

export default Diary;
