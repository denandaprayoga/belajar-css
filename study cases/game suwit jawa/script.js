function getPilihanComp() {
  const index = Math.round(Math.random() * 2);
  const comp = ['gajah', 'semut', 'orang'];
  return comp[index];
}

function getHasil(comp, player) {
  if (player == comp) return 'SERI!';
  if (player == 'gajah') return comp == 'orang' ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') return comp == 'gajah' ? 'KALAH!' : 'MENANG!';
  if (player == 'semut') return comp == 'orang' ? 'KALAH' : 'MENANG!';
}

function putar() {
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', `img/${gambar[i++]}.png`);
    if (i === gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach((e) => {
  e.addEventListener('click', function () {
    const pilihanComputer = getPilihanComp();
    const pilihanPlayer = e.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', `img/${pilihanComputer}.png`);
      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
  });
});
