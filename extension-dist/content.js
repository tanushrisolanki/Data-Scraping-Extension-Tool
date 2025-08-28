// Highlights elements on hover
document.addEventListener("mouseover", (e) => {
  e.target.style.outline = "2px solid red";
});
document.addEventListener("mouseout", (e) => {
  e.target.style.outline = "";
});
