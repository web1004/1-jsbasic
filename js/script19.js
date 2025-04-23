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
  console.log('clientX: ', event.clientX, 'clientY: ', event.clientY,);
  console.log('pageX: ', event.pageX, 'pageY: ', event.pageY,) ;  //스크롤포함
});

//03-클릭한 지점에 빨강원 나오게 하기
body.addEventListener('click', function(event){
  //console.log(event);
  console.log('pageX: ', event.pageX, 'pageY: ', event.pageY,);

  //<div class="circle"></div>
  let div = document.createElement('div');
  div.classList.add('circle');
  div.style.top = event.pageY-25 + 'px';
  div.style.left = event.pageX-25 + 'px';
  body.appendChild(div);
});