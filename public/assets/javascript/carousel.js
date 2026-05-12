let slideIndex = 0;
const wrapper = document.querySelector(".cards-wrapper");
const totalSlides = document.querySelectorAll(
  ".empresa .cards-wrapper .card",
).length;

function mudarSlide(direcao) {
  slideIndex += direcao;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  const deslocamento = -slideIndex * 100;

  wrapper.style.transform = `translateX(${deslocamento}%)`;
}
