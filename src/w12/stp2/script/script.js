console.log('안녕하세요');
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = 'oklch(0.75, 0.05, 0)';
// style 넣으려면 '' 필수

let aCard = document.querySelector('.card');
// .card에 해당하는 첫 번째 하나만 찾아줌
console.log(aCard);
aCard.addEventListener('click', function () {
  console.log('클릭!');
});

// document.querySelectorAll('.card');
// .card에 해당하는 모든 친구들을 찾아줌
