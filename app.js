const modal = document.getElementsByClassName('modal')[0];
const openModal = document.getElementsByClassName('cta-add')[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];

openModal.addEventListener('click' , () => {
    modal.showModal();
});

closeBtn.addEventListener('click' , () => {
    modal.close();
});