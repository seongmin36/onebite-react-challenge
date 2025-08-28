function add10(num) {
  // resolve : 비동기 작업을 성공 상태로 바꾸는 함수
  // reject : 비동기 작업에서 실패 상태로 바꾸는 함수
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

// Promise 체이닝
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  // 반환된 새로운 promise 객체를 재사용
  .then((result) => {
    console.log(result); // 20
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // promise가 실패했을 때 reject
    console.log(error);
  });
