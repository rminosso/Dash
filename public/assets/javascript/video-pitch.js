const btnPlay = document.getElementById("play");

btnPlay.addEventListener("click", () => {
  document.querySelector(".overlay-video").style.display = "none";

  document.getElementById("video").play();
});
