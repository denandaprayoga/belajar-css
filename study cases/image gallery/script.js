const jumbo = document.querySelector('.jumbo');
const thumbnail = document.querySelector('.thumbnail');
const thumbs = document.querySelectorAll('.thumb');
thumbnail.addEventListener('click', function (e) {
  if (e.target.className === 'thumb') {
    jumbo.src = e.target.getAttribute('src');
    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);

    thumbs.forEach(function (thumb) {
      thumb.className = 'thumb';
    });
    e.target.classList.add('active');
  }
});
