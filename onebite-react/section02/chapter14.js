// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "조성민",
        id: "krong",
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  // await는 getDate() 함수의 Promise 객체가 반환될 때까지 기다림
  const data = await getData();
  console.log(data);
}

printData();
