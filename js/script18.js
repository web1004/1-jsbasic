let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

console.log(btn1);
console.log(btn2);

//(2)프로퍼티 리스너
btn1.onclick = function(){
  alert('Hello Javascript!');
};

//(3)addEventListener
// btn2.addEventListener('click', function(){
//   alert('addEventListener');
// });

function helloEvent(){
  alert('addEventListener');
};
btn2.addEventListener('click', helloEvent);


const button = document.querySelector('.event');
const removeButton = document.querySelector('.remove')

function handler(event){
  console.log(event);
};
function removeHandler(event){
  button.removeEventListener('click', handler);
}

button.addEventListener('click',handler);
removeButton.addEventListener('click',removeHandler);


/*  
btn.addEventListener('click', function(event){
  console.log('event:', event)  
});

이벤트객체는 파라미터(event)로 넘겨받을수 있는데 브라우저가 우리에게 전달해주는것이다.
이벤트객체 속에는 이벤트에 관련된 다양한 속성와 메서드를 가지고 있다.
파라미터의 이름은 맘대로 지을수 있다.

이벤트라는건 어떤 동작이나 상태등의 사건이 발생하는것을 의미한다.
키보드를 눌렀거나 클릭을 했거나 등등이 이벤트로 분류가 된다.
html DOM 요소들은 이런 이벤트가 발생했을때 웹브라우저에서 이벤트가 발생된걸 알수 있도록 어떤 이벤트 신호를 발생을 시키는데, 이때 자바스크립트는 발생한 이벤트에 반응을 해서 어떤 처리 어떤 동작을 수행할수가 있다.

자바스크립트에서 이벤트에 대한 반응을 지정하기 위해서는 해당 이벤트를 감지할수 있는 EventListener를 사용해서 이벤트 핸들러를 지정해줘야한다. 
*/