const inputElement = document.querySelector('#input');
const selectElement = document.querySelector('#color');
const resultElement = document.querySelector('#result');

inputElement.addEventListener('mouseover', () => {
  console.log(inputElement.value);
});

selectElement.addEventListener('change', () => {
  console.log(selectElement.value);
  resultElement.textContent = selectElement.value;
});