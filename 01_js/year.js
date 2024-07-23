const year = Number(prompt(`${year}년`));

if ((year % 4 === 0 && 100 != 0) || year % 400 === 0) {
  console.log(`${year}년은 윤년입니다.`);
} else {
  console.log(`${year}년은 윤년이 아닙니다.`);
}
