const menu = document.getElementById("menu");
const input = document.querySelector(".input");

function openMenu() {
  menu.style.right = 0;
}

function closeMenu() {
  menu.style.right = "-200px";
}

function clearInput() {
  input.value = "";
}
