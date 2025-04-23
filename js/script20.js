let inputBox =document.querySelector('#input-box');
let img =document.querySelector('img');

// inputBox.addEventListener('keypress', function(event){
//   console.log('keypress');
// });

// inputBox.addEventListener('keydown', function(event){
//   console.log('keydown');
// });

// inputBox.addEventListener('keyup', function(event){
//   console.log('keyup');
// });

// inputBox.addEventListener('focus', function(event){
//   console.log('focus');
// });

// inputBox.addEventListener('blur', function(event){
//   console.log('blur');
// });

inputBox.addEventListener('change', function(event){
  console.log('change');
});

img.addEventListener('error', function(event){
  //console.log('error');
  console.log(event);
  event.target.src = 'image/apple.jpg';
});