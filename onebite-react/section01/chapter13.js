// 1. 콞백함수
function main(value) {
  // 아규먼트로 함수가 들어왔기 때문에 표현식으로 선언 가능
  value();
}

// function sub() {
//   console.log("i am sub");
// }

main(() => {
  console.log("i am sub");
});

// 2, 콜백함수의 활용
function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, (i) => {
  console.log(i);
});

repeat(5, (i) => {
  const a = console.log(i * 2);
  return a;
});
