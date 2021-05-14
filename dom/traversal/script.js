//DOM Traversal
// const close = document.querySelectorAll('.close');
// close.forEach((el) => {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';

//preventDefault() menghilangkan perilaku default nya
// e.preventDefault();

//menghentikan event bubbling
// e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach((card) => {
//   card.addEventListener('click', function () {
//     alert('oke');
//   });
// });

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
  if (e.target.className === 'close') {
    e.target.parentElement.style.display = 'none';

    //mengatasi aksi default
    e.preventDefault();
  }
});
