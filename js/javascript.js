/*tiempo de carrusel*/
$(".carousel").carousel({
  interval: 3000,
});

/*pnatalla de carga*/
window.addEventListener("load", function () {
  document.querySelector(".pantalla-carga").style.animation =
    "fadeOut 1.5s ease-in-out forwards";
  setTimeout(function () {
    document.querySelector(".pantalla-carga").style.display = "none";
    document.querySelector(".contenido").style.display = "block";
    document.body.classList.remove("loading"); // Restablece el scroll
  }, 1600);
});
