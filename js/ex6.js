let oPrice = document.querySelector('#originalPrice');
let rPrice = document.querySelector('#rate');
let btn = document.querySelector('#result');
let viewResult = document.querySelector("#showResult");

btn.addEventListener('click', () => {
  let num1 = oPrice.value;
  let num2 = rPrice.value;

  if(num1 > 0 && num2 > 0) { //0보다 큰숫자를 입력할때만 계산되게 함
    let savedPrice = num1 * (num2/100);  //할인된 금액(가격*%)
    let resultPrice = num1 - savedPrice;  //최종 할인이 된 후의 금액

    viewResult.innerHTML = `상품의 가격은 ${num1}원, 할인율은 ${num2}%,<br>
    <b>${savedPrice}</b>원을 절약한 <b>${resultPrice}</b>원에 살 수 있습니다.`;
  };
});