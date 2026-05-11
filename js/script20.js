const input = document.getElementsByTagName('input');
const result = document.querySelector('h1');
const button = document.querySelector('button');

/* console.log(input);
console.log(typeof input[0].value); //암시적형변환
console.log(typeof Number(input[1].value)); //명시적형변환

button.addEventListener('click', () => {
  //result.innerText = `정답은 ${input[0].value + input[1].value}입니다.`;
  //암시적형변환이 일어나서 문자로 타입이 바뀐상태라 숫자합이 아니라 문자결합이 됨

  result.innerText = `정답은 ${Number(input[0].value) + Number(input[1].value)}입니다.`;
}); */

//input 초기값을 랜덤하게, 계산하는 함수를 만들기

//input[0].value = Math.random();
//input[1].value = Math.random();

//난수의 범위설정(0~10)
//input[0].value = Math.random()*10;
//input[1].value = Math.random()*10;

//난수는 0부터 시작함
// input[0].value = Math.round(Math.random()*10);
// input[1].value = Math.round(Math.random()*10);

//1~10 까지의 범위설정
input[0].value = Math.round(Math.random()*9)+1;
input[1].value = Math.round(Math.random()*9)+1;

const sum = () => {
  result.innerText = `정답은 ${Number(input[0].value) + Number(input[1].value)}입니다.`;
};

//버튼을 클릭할때 더한 결과값 나오게 하기
// button.addEventListener('click', () => {
//   sum();
// });

button.addEventListener('click', sum);

//sum(); ->함수가 바로 실행되어서 페이지가 열리자마자 계산된 결과값 출력