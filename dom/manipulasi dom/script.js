//manipulasi element

//innerHTML = mengubah isi element
const judul = document.getElementById("judul");
judul.innerHTML = "<em>Denanda prayoga</em>";

//element.style.<propertiCss>
const sectionA = document.getElementById("a");
sectionA.style.backgroundColor = "lightblue";

//element.setAttribute = untuk menambahkan atribut ke element
const a = sectionA.querySelector("a");
a.setAttribute("id", "link");

//element.getAttribute = mengambil nilai atribut
const linkAtribut = a.getAttribute("href");
console.log(linkAtribut);

//element.removeAttribute = menghapus atribut
a.removeAttribute("id");

//mengelola atribute class
//element.classList.add() = menambahkan class baru
const p2 = document.querySelector(".p2");
p2.classList.add("label");

//element.classList.remove() = menghapus class
//p2.classList.remove("label");

//element.classList.toggle()
//menambahkan class jika belum ada dan
//menghapus class jika sudah ada
//p2.classList.toggle("label");

//element.classList.item() = untuk mengetahui nama class dari sebuah element
console.log(p2.classList.item(1));

//element.classList.contains() = untuk mencari nama class di element
console.log(p2.classList.contains("p2"));

//element.classList.replace() = untuk mengganti nama class
p2.classList.replace("label", "satu");
