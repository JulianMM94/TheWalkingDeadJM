document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".cabecera .menu ul");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("menu-abierto");
  });

  // Opcional: cerrar menú al hacer click fuera
  document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("menu-abierto");
    }
  });
});
