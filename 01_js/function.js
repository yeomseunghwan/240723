/*
    익명 함수
        - 함수는 코드의 집합을 나타내는 자료형
        function() {}
        
*/

// function f(x) {
//   return x * x;
// }

// // 함수를 호출합니다
// console.log(f(3));

// 기본적인 함수 예제
// - A부터 B까지 더하는 함수 만들기

// 'sumAll'이라는 이름의 함수를 정의해요. 이 함수는 두 개의 숫자 'a'와 'b'를 받아서
// 'a'부터 'b'까지의 모든 숫자를 더한 값을 반환해요.
function sumAll(a, b) {
  // 합계를 저장할 변수 'output'을 0으로 초기화해요.
  // 이 변수는 나중에 결과를 저장할 거예요.
  let output = 0;

  // 'a'부터 'b'까지 숫자를 하나씩 반복해서 확인할 거예요.
  // 이때, 'i'라는 변수를 사용해서 반복을 해요.
  // 'i'는 처음에는 'a'와 같고, 점점 커지면서 'b'보다 작거나 같을 때까지 반복해요.
  for (let i = a; i <= b; i++) {
    // 현재 숫자 'i'를 'output'에 더해요.
    output += i;
  }

  // 반복이 끝나면, 'output'에는 'a'부터 'b'까지의 모든 숫자를 더한 값이 저장되어 있어요.
  // 이 값을 반환해요.
  return output;
}

// 'sumAll' 함수를 호출해서 1부터 100까지의 합계를 구하고, 그 결과를 콘솔에 출력해요.
console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`);

// 'sumAll' 함수를 호출해서 1부터 500까지의 합계를 구하고, 그 결과를 콘솔에 출력해요.
console.log(`1부터 500까지의 합: ${sumAll(1, 500)}`);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 'min'이라는 이름의 함수를 정의해요. 이 함수는 숫자로 이루어진 배열을 받아서
// 배열에서 가장 작은 숫자를 찾아서 반환해요.
function min(array) {
  // 배열의 첫 번째 숫자를 'output' 변수에 저장해요.
  // 처음에는 첫 번째 숫자가 가장 작은 숫자라고 가정해요.
  let output = array[0];

  // 배열의 모든 숫자를 하나씩 확인하기 위해 반복문을 사용해요.
  for (const item of array) {
    // 현재 'output'에 저장된 값보다 더 작은 숫자가 'item'에 있으면...
    if (output > item) {
      // 'output'의 값을 'item'으로 변경해요.
      // 이제 'item'이 더 작은 숫자이므로 'output'이 이 숫자가 돼요.
      output = item;
    }
  }

  // 반복이 끝나면, 배열에서 가장 작은 숫자가 'output'에 저장되어 있어요.
  // 이 값을 반환해요.
  return output;
}

// 숫자들로 이루어진 배열을 만들어요.
const testArray = [52, 273, 32, 103, 275, 24, 57];

// 배열의 숫자들 중에서 가장 작은 값을 찾기 위해 'min' 함수를 호출해요.
// 그 결과를 콘솔에 출력해요.

console.log(`${testArray} 중에서`);
console.log(`최솟값=${min(testArray)}`);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

function earnings(name, wage = 8590, hours = 40) {
  console.log(`#${name} 님의 급여 정보`);
  console.log(`-시급: ${wage}원`);
  console.log(`-근무시간: ${hours}시간`);
  console.log(`-급여:${wage * hours}원`);
  console.log("");
}

// 최저 임금으로 최대한 일하는 경우
earnings("구름");

// 시급 1만원으로 최대한 일하는 경우
earnings("별", 10000);

// 시급 1만원으로 52시간 일한 경우
earnings("인성", 10000, 52);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

function sample() {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(`${i}번쨰 요소: ${arguments}`);
  }
}

sample(1, 2);
sample(1, 2, 3);
sample(1, 2, 3, 4);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 함수를 선언합니다
function callThreeTimes(callback) {
  for (let i = 0; i < 3; i++) {
    callback(i);
  }
}

function print(i) {
  console.log(`${i}번째 함수 호출`);
}

// 함수를 호출합니다.
callThreeTimes(print);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
    콜백 함수를 활용하는 함수 : forEach()
    -forEach() 메소드는 배열이 갖고 있는 함수(메소드)로써 단순하게 배열 내부의 요소를 사용해서 콜백 함수를 호출
    function (value, index, array) {}
 */

// const numbers = [273, 52, 103, 32, 57];

// numbers.forEach(function (value, index, array) {
//   console.log(`${index}번째 요소: ${value}`);
// });

// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
    콜백 함수
    - 콜백 함수를 활용하는 함수:map()
    - map() 메소드는 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 만드는 함수
    - 배열의 map() 메소드
*/

// 숫자로 이루어진 배열을 만들어요.
// let numbers = [273, 52, 103, 32, 57];

// // 'map' 함수를 사용해서 배열의 모든 값을 제곱한 새로운 배열을 만들어요.
// // 'map' 함수는 배열의 각 요소를 변형해서 새로운 배열을 만들어요.
// numbers = numbers.map(function (value, index, array) {
//   // 현재 요소 'value'를 제곱해요.
//   return value * value;
// });

// // 배열의 모든 요소를 하나씩 출력해요.
// numbers.forEach(console.log);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
    콜백 함수를 활용하는 함수 : filter()
    filter() 메소드는 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수
*/
// 숫자로 이루어진 배열을 만들어요.
// const numbers = [0, 1, 2, 3, 4, 5];

// 'filter' 함수를 사용해서 짝수만 추출한 새로운 배열을 만들어요.
// 'filter' 함수는 배열의 각 요소를 확인해서 조건에 맞는 요소만 모아 새로운 배열을 만들어요.
// const evenNumbers = numbers.filter(function (value) {
//   // 'value'가 짝수인지 확인해요.
//   // 짝수는 2로 나누었을 때 나머지가 0인 숫자예요.
//   return value % 2 === 0;
// });

// // 원래 배열을 콘솔에 출력해요.
// console.log(`원래 배열:${numbers}`);

// // 짝수만 모은 새로운 배열을 콘솔에 출력해요.
// console.log(`짝수만 추출:${evenNumbers}`);

// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
    화살표 함수
    화살표 함수는 function 키워드 대신 화살표(=>) 를 사용하며, 다음과 같은 형태로 생성하는 간단한 함수
    (매개변수)=> {
        
        }
*/

/*
    타이머 함수
        - 특정 시간마다 또는 특정 시간 이후에 콜백 함수를 호출할 수 있는 타이머(timer) 함수
        setTimeout(함수, 시간) 특정 시간 후에 함수를 한 번 호출
        setInterval(함수, 시간) 특정 시간마다 함수를 호출
 */

// setTimeout 함수를 사용해서 1초 후에 한 번만 실행되는 코드를 작성해요.
// 1초(1000밀리초) 후에 화살표 함수가 실행됩니다.
// setTimeout(() => {
// console.log("1초 후에 실행됩니다");
// }, 1 * 1000);

// 숫자 0을 저장하는 변수 'count'를 만들어요.
// 이 변수는 몇 번 실행되었는지 세는 데 사용될 거예요.
// let count = 0;

// setInterval 함수를 사용해서 1초마다 반복해서 실행되는 코드를 작성해요.
// 1초(1000밀리초)마다 화살표 함수가 실행됩니다.
// setInterval(() => {
// 콘솔에 현재 'count' 값을 출력하면서 몇 번째 실행인지 알려줍니다.
// console.log(`1초마다 실행됩니다(${count}번째)`);

// 'count' 값을 1 증가시켜서 다음에 실행될 때는 더 큰 숫자가 출력되도록 해요.
// count++;
// }, 1 * 1000);

// 콘솔에 구분선 역할을 하는 문자열을 출력해요.
// 이 줄은 setTimeout과 setInterval이 시작되기 전에 먼저 실행됩니다.
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/*
  타이머를 종료하고 싶을 때는 clearTimeout() 함수와 clearInterval() 함수를 사용
  clearTimeout(타이머_ID) setTimeout() 함수로 설정한 타이머를 제거
  clearInterval(타이머_ID) setInterval() 함수로 설정한 타이머를 제거
*/

// 'id'라는 변수를 선언해요. 이 변수는 setInterval 타이머의 ID를 저장할 거예요.
// let id;

// 'count'라는 변수를 선언하고 초기값을 0으로 설정해요.
// 이 변수는 몇 번 실행되었는지 세는 데 사용될 거예요.
// let count = 0;

// setInterval 함수를 사용해서 1초마다 반복해서 실행되는 코드를 작성해요.
// 1초(1000밀리초)마다 화살표 함수가 실행됩니다.
// id = setInterval(() => {
// 콘솔에 현재 'count' 값을 출력하면서 몇 번째 실행인지 알려줍니다.
// console.log(`1초마다 실행됩니다(${count}번째)`);

// 'count' 값을 1 증가시켜서 다음에 실행될 때는 더 큰 숫자가 출력되도록 해요.
// count++;
// }, 1 * 1000);

// setTimeout 함수를 사용해서 10초 후에 실행되는 코드를 작성해요.
// 10초(10000밀리초) 후에 화살표 함수가 실행됩니다.
// setTimeout(() => {
// 콘솔에 "타이머를 종료합니다"라는 메시지를 출력해요.
// console.log("타이머를 종료합니다");

// clearInterval 함수를 사용해서 setInterval 타이머를 종료해요.
// 'id' 변수에 저장된 타이머 ID를 사용해요.
// clearInterval(id);
// }, 10 * 1000);

let pi = 3.14;
console.log(`파이 값은 ${pi}입니다.`);

// 블록을 사용한 스코프 생성
{
  let pi = 3.141592;
  console.log(`파이 값은 ${pi}입니다.`);
}
console.log(`파이 값은 ${pi}입니다.`);

// 함수 블록을 사용한 스코프 생성
function sample() {
  let pi = 3.141592;
  console.log(`파이 값은 ${pi}입니다.`);
}
sample();
console.log(`파이 값은 ${pi}입니다.`);
