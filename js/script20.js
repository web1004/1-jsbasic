const input = document.getElementsByTagName('input');
const result = document.querySelector('h1');
const button = document.querySelector('button');

console.log(input);
console.log(typeof input[0].value);  //암시적형변환
console.log(typeof Number(input[1].value)); //명시적형변환

/* button.addEventListener('click', () => {
  result.innerText = `정답은 ${Number(input[0].value) + Number(input[1].value)}입니다.`;
}); */

//input 초기값을 랜덤하게, 계산하는 함수를 만들기

// input[0].value = Math.random();
// input[1].value = Math.random();

// input[0].value = Math.random() * 10;
// input[1].value = Math.random() * 10;

// input[0].value = Math.round(Math.random() * 10);
// input[1].value = Math.round(Math.random() * 10);

input[0].value = Math.round(Math.random() * 9)+1;
input[1].value = Math.round(Math.random() * 9)+1;

const sum = () => {
  result.innerText = `정답은 ${Number(input[0].value) + Number(input[1].value)}입니다.`;
};


//버튼을 클릭할때
button.addEventListener('click', () => {
  sum();
});

// sum(); ->페이지가 열리자마자 화면에 숫자가 출력되고 계산된 결과값 출력