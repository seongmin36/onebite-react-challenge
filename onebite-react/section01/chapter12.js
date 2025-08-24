funcA();

// 함수 선언문 -> 호이스팅 O
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

// varB();

// 1. 함수 표현식 -> 호이스팅 대상 X
// 익명 함수
let varB = function () {
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(19));
