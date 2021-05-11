//Manipulasi node

//langka-langkah menambahkan element pada document
//1. buat tag / element
//2. buat isi / text / content
//3. masukkan isi ke dalam tag yg baru dibuat
//4. ambil element yg nantinya di jadikan sebagai parent untuk element baru tersebut
//4. masukkan element baru ke dalam document

//buat tag baru
const pBaru = document.createElement("p");

//buat isi
const isi = document.createTextNode(
  "ini paragraf baru yang dibuat menggunakan javascript"
);

//masukkan isi ke dalam element baru (pBaru)
pBaru.appendChild(isi);

//ambil element untuk dijadikan sebagai parent
const sectionA = document.getElementById("a");

//masukkan element baru ke dalam document
//appendChild() = menambahkan element ke akhir element parent
sectionA.appendChild(pBaru);

//membuat element li baru
const liBaru = document.createElement("li");
//membuat text
const textLiBaru = document.createTextNode("Item baru");
//masukkan text ke element baru
liBaru.appendChild(textLiBaru);
//mengambil parent element
const ul = document.querySelector("section#b ul");
//mengambil element selanjutnya setelah element baru di tempatkan
const li = ul.querySelector("li:nth-child(2)");
//parent.insertBefore(elementBaru, elementSelanjutnya) = menambahkan elemen baru di tempat yg kita inginkan
ul.insertBefore(liBaru, li);

//menghapus element
const link = sectionA.querySelector("a");
sectionA.removeChild(link);

//mengganti element
const sectionB = document.getElementById("b");
const p = sectionB.querySelector("p");
const h2Baru = document.createElement("h2");
const textH2 = document.createTextNode("Judul baru!");
h2Baru.appendChild(textH2);
//parent.replaceChild(elemBaru, elemLama)
sectionB.replaceChild(h2Baru, p);

//memberikan style pada elemen baru
pBaru.style.backgroundColor = "lightblue";
liBaru.style.backgroundColor = "lightblue";
h2Baru.style.backgroundColor = "lightblue";
