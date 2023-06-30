// Obtener elementos del DOM
var modal = document.getElementById('modal');
var closeButton = document.getElementById('cerrarmodal');

// Función para abrir la ventana modal
function openModal() {
  modal.showModal();
  modal.classList.add('show');
  modal.classList.remove('closem');
}

// Función para cerrar la ventana modal
function closeModal() {
  modal.close();
  modal.classList.add('closem');
  modal.classList.remove('show');
}
// Evento de clic para abrir la ventana modal
document.querySelector('#Goit_students').addEventListener('click', openModal);

// Asignar eventos a los botones
closeButton.addEventListener('click', closeModal);
