//document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";
li2.style.color = "white";

//element p pertama saja yg akan terpengaruh
// const p = document.querySelector("p");
// p.innerHTML = "hanya paragraf pertama saja yg diubah";

//document.querySelectorAll() -> nodeList
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

//mengubah node root
const sectionC = document.querySelector("#c");
const h2 = sectionC.getElementsByTagName("h2")[0];
h2.style.backgroundColor = "lightgreen";
h2.style.color = "white";
