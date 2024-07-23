// 배열 뒷부분에 요소 추가하기
const todos = ["우유 구매", "업무 메일 확인하기", "필라테스 수업"];

console.log(todos);

// push() 메소드를 사용해 배열 뒷부분에 요소 추가하기
todos.push("저녁 식사 준비하기"); // 4
todos.push("파이노 연습하기"); // 5

console.log(todos);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 인덱스를 사용해 배열 뒷부분에 요소 추가하기
const fruitsA = ["사과", "배", "바나나"];

fruitsA[10] = "귤";

console.log(fruitsA);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 배열 요소 제거하기
// - 인덱스로 요소 제거 하기

const itemsA = ["사과", "배", "바나나"];

console.log(itemsA);

itemsA.splice(0, 1); // 배열의 2번쨰 인덱스로부터 1개 요소를 제거

console.log(itemsA);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
// const 인덱스 = 배열.indexOf(요소);
// 배열.splice(인덱스, 1);

const itemsB = ["사과", "배", "바나나"];

const index = itemsB.indexOf("바나나");
itemsB.splice(index, 1);
console.log(itemsB);
itemsB.indexOf("바나나");
console.log(itemsB);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 값으로 요소 제거하기
// 배열.splice(인덱스,0,요소)
const itemsD = ["사과", "귤", "바나나", "오렌지"];
itemsD.splice(1, 0, "양파");
console.log(itemsD); // ㅡㅡㅡㅡㅡㅡ> 1번째 인덱스에 양파가 추가
