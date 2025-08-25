// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수에다가 객체를 보관한다고 하더라도 프로퍼티를 수정하거나 삭제하는 것은 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "조성민",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
