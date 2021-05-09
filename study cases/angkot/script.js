let penumpang = [];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        console.log(`${namaPenumpang} sudah ada didalam angkot`);
        return penumpang;
      } else if (i === penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    console.log(`Angkot masih kosong`);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        penumpang.splice(i, 1);
        return penumpang;
      } else if (i === penumpang.length - 1) {
        console.log(`${namaPenumpang} tidak ada di angkot`);
        return penumpang;
      }
    }
  }
};

console.log(penumpang);
