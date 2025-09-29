document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('imagen-modal');
    const cerrar = document.querySelector('.cerrar-modal');
    const imagenes = document.querySelectorAll('.imagen-temporada');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            modalImg.src = this.querySelector('img').src;
        });
    });

    cerrar.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
