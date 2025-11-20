console.log("darkmode.js loaded");

const html = document.querySelector("html");
const btn = document.querySelector("#mode-btn");

function toggleDark() {
  console.log("Toggle dark mode");
  html.classList.toggle("dark");
  if (btn.innerHTML === "Dark mode") {
    btn.innerHTML = "Light mode";
  } else {
    btn.innerHTML = "Dark mode";
  }
}

btn.addEventListener("click", toggleDark);
