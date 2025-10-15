//(1)함수를 이용해서 inline방법으로 호출
/* function ageCalc(){
  let objDate = new Date();
  let currentYear = objDate.getFullYear();
  let birthYear = prompt("태어난 년도를 입력하세요.","YYYY");
  let age = 0;

  age = currentYear - birthYear +1;
  document.querySelector("#result").innerHTML = `당신의 나이는 ${age} 세입니다.`;
}; */

//(2)addEventListener를 이용한 방법
let btn = document.querySelector('button');
let currentAge = document.querySelector('#result');

// console.log(btn);
// console.log(currentAge);

let objDate = new Date();
let currentYear = objDate.getFullYear();

btn.addEventListener('click', () => {
  let birthYear = prompt("태어난 년도를 입력하세요.","YYYY");
  let age = currentYear - birthYear +1;
  currentAge.innerHTML = `당신의 나이는 ${age} 세입니다.`;
});