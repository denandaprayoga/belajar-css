// DOM Selection
// document.getElementById() -> Element
const judul = document.getElementById("judul");
judul.style.color = "blue";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Denanda prayoga";

//document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName("p");
//cara manual
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";

//menggunakan looping
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

//document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari javascript";
p1.style.color = "white";
