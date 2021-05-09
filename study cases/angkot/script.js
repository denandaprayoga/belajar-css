function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (penumpang.length === 0) {
      console.log(`angkot masih kosong`);
      return penumpang;
    }
    for (let i = 0; i < penumpang.length; i++) {
      this.penumpang.splice(i, 1);
      this.kas += bayar;
      return penumpang;
    }
  };
}

let angkot1 = new Angkot("aden", ["citayam", "bojonggede"], [], 0);
