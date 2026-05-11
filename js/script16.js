//get메서드
//css방식: 선택자{} -> 자바스크립트 document.get메서드('');
let title = document.getElementById('title');
console.log(title);

title.textContent = '스포츠 3대 종목';

let items = document.getElementsByClassName('item');
//여러개일때는 배열형태로 가지고 옴
console.log(items);
console.log('농구: ', items[0]);
console.log('테니스: ', items[1]);
console.log('배드민턴: ', items[2]);

let liList = document.getElementsByTagName('li');
console.log(liList);

console.log('------------------------------------');

//쿼리요소
let h2 =document.querySelector('#title');
console.log('h2: ', h2);

let item = document.querySelector('.item');
console.log('query item: ', item);

let itemAll = document.querySelectorAll('.item');
console.log('query itemAll: ', itemAll);
console.log('농구: ', items[0]);
console.log('테니스: ', items[1]);
console.log('배드민턴: ', items[2]);

//html조작하기
h2.textContent = '스포츠!!!';
h2.textContent='<span>스포츠!!!</span>';
h2.innerHTML = '<span>스포츠@@@</span>';

let input = document.querySelector('input');
console.log(input);

input.setAttribute('placeholder','헬스운동을 입력해주세요!');
input.setAttribute('required', '');
input.removeAttribute('placeholder');
input.removeAttribute('required');

let helloItem1 = document.querySelector('.hello1');
console.log('helloItem1: ', helloItem1);
helloItem1.style.color = 'white';
helloItem1.style.backgroundColor = 'black';
//자바스크립트에서 css의 속성을 사용하려면 중간에 "-"는 제거하고 두번째 오는 단어는 대문자를 사용함

// helloItem1.classList.add('dark');
// helloItem1.classList.add('dark','one'); -> 여러개의 클래스를 적용할때
// helloItem1.classList.remove('dark');

let helloItem2 = document.querySelector('.hello2');
console.log('helloItem2: ', helloItem2);
helloItem2.style.cssText = 'font-size:33px;color: #fff;background-color:hotpink';

let helloItem3 = document.querySelector('.hello3');
console.log('helloItem3: ', helloItem3);
helloItem3.innerText = '안녕하세요3.~!!!'; //textContent와 동일한 기능을 함
helloItem3.style.color = 'blue';

let tit = document.createElement('h1');
let body = document.querySelector('body');

tit.innerText = '새로운 친구에요!';
tit.style.color = 'red';
body.appendChild(tit);