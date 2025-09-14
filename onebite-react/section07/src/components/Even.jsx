import { useEffect } from "react";

const Even = () => {
  // Even 컴포넌트의 unmount 제어
  useEffect(() => {
    // useEffect내에서 return의 새로운 함수 : 클린업, 정리함수(useEffect 끝날때 실행)
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수입니다.</div>;
};

export default Even;
