function returnFalse() {
  console.log("False 함수");
  return undefined; // undefined : falsy
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// 첫 번째 returnFalse() 피연산자의 true/false를 확정할 수 있다면 두 번째 피연산자 returnTrue의 값을 실행하지 않는다
// returnFalse() : false , returnTrue() : True =>
// returnFalse()만 실행
console.log(returnFalse() && returnTrue());

// returnFalse() 및 returnTrue() 둘 다 실행
console.log(returnTrue() && returnFalse());

// returnTrue()만 실행
console.log(returnTrue() || returnFalse());

// returnFalse() 및 returnFalse() 둘 다 실행
console.log(returnFalse() || returnTrue());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음"); // name이 falsy 값이라서 ""가 출력
}

printName();
printName({ name: "이정환" });
