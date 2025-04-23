let h2 = document.querySelector('h2');
console.log(h2);

h2.dataset.test = 'Hello Javascript!!!';
console.log('h2.dataset.test',h2.dataset.test);

let liList = document.querySelectorAll('li');
let img = document.querySelector('img');
let selectedItem = document.querySelector('.selected-item');

/* console.log('liList: ', liList);

liList[0].addEventListener('click', function(event){
  //console.log(event);
  //console.log(event.target);
  //console.log(event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src',event.target.dataset.img);
});

liList[1].addEventListener('click', function(event){
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src',event.target.dataset.img);
});

liList[2].addEventListener('click', function(event){
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src',event.target.dataset.img);
}); */

liList[0].addEventListener('click', selectItem); 
liList[1].addEventListener('click', selectItem); 
liList[2].addEventListener('click', selectItem); 

//반복되는 내용을 함수 만들기
function selectItem(event){  //호이스팅의 영향을 받음
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src',event.target.dataset.img);
};