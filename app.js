const getButton = document.querySelectorAll(".question").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("rotate");
    item.classList.toggle("bold");
    item.nextElementSibling.classList.toggle("hide-answer");
  });
});
