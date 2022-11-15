const modal = document.getElementsByClassName('modal')[0];
const openModal = document.getElementsByClassName('cta-add')[0];

openModal.addEventListener('click' , () => {
    modal.showModal();
});