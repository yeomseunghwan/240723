// 이스케이프
console.log("한빛\t아카데미"); // \t 수평탭

console.log("한빛 \n 아카데미"); // \n 행 바꿈

console.log("\\\\"); // // 역슬래시

console.log("가나다" + "라마" + "바사아" + "자차카타" + "파하"); // 문자열 연결
// 글자를 연결할 때 +를 사용

// javascript = 웹 브라우저가 번역하는것 웹브라우저를 통해서 웹에서 표현하는 언어
// java = 컴파일러가 별도로 존재

// boolean 논리 연산자 true / false로만 출력
console.log(52 < 273);

// 비교 연산자
// && and(그리고) , || or(또는)

let pi = 3.14159265;

// // Date 객체를 선언합니다.
// let date = new Date();
// // 요소를 추출
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let day = date.getDay();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

let date = new Date();
let hours = date.getHours();
// 조건문
if (hours < 5) {
  alert("잠을 자렴");
} else if (hours < 7) {
  alert("준비");
} else if (hours < 9) {
  alert("출근");
} else if (hours < 12) {
  alert("빈둥빈둥");
} else if (hours < 14) {
  alert("식사");
} else {
  // 여러가지 업무를 수행합니다.
}
