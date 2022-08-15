// Dark v. light mode switch, WIP
let darkMode = true;
function toggleMode() {
  document.body.classList.remove("dark-mode"); // body color
  document.querySelector(".display-3").style.color = "#4F852D"; // Hero header
  document.querySelector("#current").classList.remove("dark-mode"); // current nav location
  const links = document.links; // all <a> elements
  // console.log(links);
  const buttons = document.querySelectorAll(".btn");
  for (const b of buttons) {
    b.classList.remove("dark-mode");
  }
  for (const l of links) {
    l.classList.remove("dark-mode");
  }

  if (darkMode) {
    document.body.classList.add("dark-mode");
    document.querySelector(".display-3").style.color = "#B5C192";
    document.querySelector(".btn-outline-primary").style.color = "#B5C192";
    document.querySelector("#current").classList.add("dark-mode");
    // const buttons = document.querySelectorAll(".btn");
    for (const b of buttons) {
      b.classList.add("dark-mode");
      // b.style.setProperty("border-color", "#B5C192", "important");
      // b.style.color = "#B5C192";
    }
    // const links = document.links;
    for (const l of links) {
      l.classList.add("dark-mode");
    }
  }

  darkMode = !darkMode;
}