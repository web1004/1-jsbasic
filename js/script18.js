let rectangle = document.querySelector('#rectangle');
let body =document.querySelector('body'); 

//01
// rectangle.addEventListener('mousedown', function(){
//   console.log('mousedown');
// });

// rectangle.addEventListener('mouseup', function(){
//   console.log('mouseup');
// });

// rectangle.addEventListener('mouseenter', function(){
//   console.log('mouseenter');
// });

// rectangle.addEventListener('mouseleave', function(){
//   console.log('mouseleave');
// });

// rectangle.addEventListener('mousemove', function(){
//   console.log('mousemove');
// });

//02
rectangle.addEventListener('mousedown', function(event){
  //console.log(event);
  console.log('clientX: ', event.clientX, 'clientY: ', event.clientY);  //브라우저 크기의 위치값
  console.log('pageX: ', event.pageX, 'pageY: ', event.pageY);  //스크롤을 포함한 위치값
});

//03-클릭한 지점에 빨강원 나오게 하기
body.addEventListener('click', function(e){
  //console.log(e);
  //console.log('pageX: ', e.pageX, 'pageY: ', e.pageY);

  //<div class="circle"></div> -> 태그 생성하기
  let div = document.createElement('div');
  div.classList.add('circle');
  div.style.top = e.pageY-25 + 'px';
  div.style.left = e.pageX-25 + 'px';
  body.appendChild(div);
});