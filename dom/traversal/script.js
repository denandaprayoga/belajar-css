//DOM Traversal
const close = document.querySelectorAll('.close');
close.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';

    //preventDefault() menghilangkan perilaku default nya
    e.preventDefault();
  });
});
