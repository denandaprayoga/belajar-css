const btn = document.getElementById('gantiWarna');
btn.addEventListener('click', function () {
  // document.body.style.backgroundColor = 'blue';
  document.body.classList.toggle('biru-muda');
});

const btnAcakWarna = document.getElementById('acakWarna');
btnAcakWarna.addEventListener('click', function () {
  const r = Math.random() * 255 + 1;
  const g = Math.random() * 255 + 1;
  const b = Math.random() * 255 + 1;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// const sRed = document.getElementById('sRed');
// const sGreen = document.getElementById('sGreen');
// const sBlue = document.getElementById('sBlue');
// sRed.addEventListener('input', function () {
//   colors(sRed.value, sGreen.value, sBlue.value);
// });
// sGreen.addEventListener('input', function () {
//   colors(sRed.value, sGreen.value, sBlue.value);
// });
// sBlue.addEventListener('input', function () {
//   colors(sRed.value, sGreen.value, sBlue.value);
// });

// function colors(r, g, b) {
//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// }

const sectionA = document.querySelector('section#a');

const sMerah = sectionA.querySelector('input[name=sMerah]');
const sHijau = sectionA.querySelector('input[name=sHijau]');
const sBiru = sectionA.querySelector('input[name=sBiru]');
sectionA.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});
