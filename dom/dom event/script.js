//event handler
const p3 = document.querySelector(".p3");
p3.onclick = ubahWarna;

function ubahWarna() {
  p3.style.backgroundColor = "lightblue";
}

//addEventListener()
const p = document.querySelector("section#b p");
p.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const li = document.createElement("li");
  const teksLi = document.createTextNode("item baru");
  li.appendChild(teksLi);
  ul.append(li);
});
