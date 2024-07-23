/*
    for in 반복문
    배열 요소를 하나한 꺼내서 특정 문장을 실행할 때 사용
    for (const 반복 변수 in 배열 또는 객체){
        문장
    }

    for in 반복문은 구문 자체로 코드의 양이 어느 정도 있어서 코드를 하나하나 입력하는 것이 힘들때.
    이럴 떄 코드 블록을 사용. for를 입력하면 for와 관련된 여러 코드 블록이 나타나고 방향키를 사용해 for in
    코드 블록으로 이동하고 Enter 또는 Tab 키를 클릭 =

    */
// const todos = ["우유구매", "업무 메일 확인하기", "필라테스 수업"];

// for (const i in todos) {
//   console.log(`${i}번쨰 할 일: ${todos[i]}`);
// }

// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
    for of 반복문
        - 요소의 값을 반복할 때 안정적으로 사용
    for (const 반복 변수 of 배열 또는 객체){
    문장
    }
    -> for in 반복문과 다르게 반복 변수에 요소의 값이 들어감
*/

// const todos = ["우유 구매", "업무 메일 확인하기", "필라테스 수업"];
// for (const todo of todos) {
//   console.log(`오늘의 할 일: ${todo}`);
// }

// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
    for 반복문
        - 특정 횟수만큼 반복하고 싶을 때 사용하는 범용적인 반복문
        for(let i = 0; i < 반복회수; i++){
        문장
        }
        -> 다른 반복문과 다르게 반복 변수를 let 키워드를 선언
 */

// for (let i = 0; i < 5; i++) {
//   console.log(`${i}번째 반복합니다`);
// }

// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// let output = 0;
// for (let i = 0; i <= 100; i++) {
//   output += i; // output = output + i;
// }
// console.log(output);

// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
    for 반복문과 함꼐 배열하기 사용하기
    for 반복문과 배열
    */
// const todos = ["우유 구매", "업무 메일 확인하기", "필라테스 수업"];

// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i}번쨰 할 일: ${todos[i]}`);
// }

// for 반복문으로 배열을 반대로 출력하기
const todos = ["우유 구매", "업무 메일 확인하기", "필라테스 수업"];

for (let i = todos.length - 1; i >= 0; i--) {
  console.log(`${i}번쨰 할 일: ${todos[i]}`);
}
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
    while 반복문
    - if조건문과 다른 점은 문장을 한 번만 실행하고 끝나는 것이 아니라 boolean 표현식이 true면 계속해서 문장 실행
    - 조건이 변하지 않는다면 무한히 반복 실행하므로 조건을 거짓으로 만드는 내용이 문장에 포함되어야 함
    - 무한 루프 : 반복문이 무한 반복되는 것
    while (boolean표현식) {
        문장
    }
*/
let i = 0;
while (true) {
  console.log(`${i}번째 반복입니다.`);
  i = i + 1;
  break;
}

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
  while 반복문
  - while 반복문과 함꼐 배열 사용하기
  - 배열과 함꼐 사용하기
 */

let j = 0;
const array = [1, 2, 3, 4, 5];

while (i < array.length) {
  console.log(`${i}:${array[i]}`);
  i++;
}

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
  break 키워드
  switch 조건문이나 반복문을 벗어날 때 사용하는 키워드
  whild(true){
  break;
  }

  continue 키워드
*/
// 변수를 선언합니다.
// let output = 0;

// 반복문
// for (let i = 1; i <= 10; i++) {
//   // 조건문
//   if (i % 2 === 1) {
//     // 홀수면 현재 반복을 중지하고 다음 반복을 수행합니다.
//     continue;
//   }
//   output += i;
// }

// console.log(output1);

// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 중첩 반복문을 사용하는 피라미드
// - 중첩 반복문은 일반적으로 n-차원 처리를 할 때 사용
// - 중첩 반복문 사용하기
// 외부의 반복문 : 줄생성(\n)

// 변수를 선언합니다
let output = "";

// 반복문
for (let i = 1; i < 15; i++) {
  for (let j = 15; j > i; j--) {
    output += "";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    output += "*";
  }
  output += "\n";
}

console.log(output);
