const banner = document.getElementById("banner-cookies");

const containerBanner = document.querySelector(".cookies-container");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    containerBanner.style.display = "block";
  }, 4500);

  setTimeout(() => {
    banner.style.opacity = 1;
  }, 5000);
});

const btnCookies = document.getElementById("agree");

btnCookies.addEventListener("click", () => {
  banner.style.opacity = 0;

  setTimeout(() => {
    containerBanner.style.display = "none";
  }, 100);
});
