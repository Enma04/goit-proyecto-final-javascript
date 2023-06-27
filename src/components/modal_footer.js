const btnAbrirModal = document.querySelector('#Goit_students');
const btnCerrarModal = document.querySelector('#cerrarmodal');
const modal = document.querySelector('#modal');

btnAbrirModal.addEventListener('click', () => {
  modal.showModal();
});

btnCerrarModal.addEventListener('click', () => {
  modal.close();
});
