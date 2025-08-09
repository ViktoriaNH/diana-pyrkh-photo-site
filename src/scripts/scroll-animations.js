function checkFadeIn() {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;
    if (isVisible && !el.classList.contains("visible")) {
      el.classList.add("visible");
    }
  });
}

document.addEventListener("scroll", checkFadeIn);
document.addEventListener("DOMContentLoaded", checkFadeIn); // запуск при загрузке
checkFadeIn(); // запуск сразу, на случай, если DOM уже готов
