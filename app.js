const arrowButton1 = document.querySelector(".cta");
const arrowButton2 = document.querySelector(".two");
const arrowButton3 = document.querySelector(".three");
const arrowButton4 = document.querySelector(".four");
const arrowButton5 = document.querySelector(".five");

const clrBlack = document.querySelector(".questions");
const clrBlack2 = document.querySelector(".second");
const clrBlack3 = document.querySelector(".third");
const clrBlack4 = document.querySelector(".fourth");
const clrBlack5 = document.querySelector(".fifth");

const answers = document.querySelector(".answers");
const answers2 = document.querySelector(".dva");
const answers3 = document.querySelector(".tri");
const answers4 = document.querySelector(".cetri");
const answers5 = document.querySelector(".pet");

arrowButton1.addEventListener("click", () => {
  arrowButton1.classList.toggle("is-active");
  clrBlack.classList.toggle("clr-black");
  answers.classList.toggle("visually-hidden");
  arrowButton1.classList.toggle("not-active");
});
arrowButton2.addEventListener("click", () => {
  arrowButton2.classList.toggle("is-active");
  clrBlack2.classList.toggle("clr-black");
  answers2.classList.toggle("not-active");
});
arrowButton3.addEventListener("click", () => {
  arrowButton3.classList.toggle("is-active");
  clrBlack3.classList.toggle("clr-black");
  answers3.classList.toggle("not-active");
});
arrowButton4.addEventListener("click", () => {
  arrowButton4.classList.toggle("is-active");
  clrBlack4.classList.toggle("clr-black");
  answers4.classList.toggle("not-active");
});
arrowButton5.addEventListener("click", () => {
  arrowButton5.classList.toggle("is-active");
  clrBlack5.classList.toggle("clr-black");
  answers5.classList.toggle("not-active");
});
