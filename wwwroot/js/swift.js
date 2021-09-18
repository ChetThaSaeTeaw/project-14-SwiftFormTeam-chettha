/* Deleted Admin */
const openModal = document.querySelector('.fa-trash-alt');
const showModal = document.querySelector('.modal-1');
const buttonOk = document.getElementById('button-1');
const buttonNo = document.getElementById('button-2');
const showComplete = document.querySelector('.complete');

/* SideMenu */
const sideMenu = document.getElementById('sideMenu');
const boxSideMenu = document.querySelector('.Navbar-box');

sideMenu.addEventListener('click', () => {
    return sideMenu.classList.toggle('actionMenu'), boxSideMenu.classList.toggle('NavbarShow');
})

/* Deleted Admin */
openModal.addEventListener('click',  () => {
    return  showModal.classList.add('active');
})

buttonOk.addEventListener('click', () => {
    return showComplete.classList.add('active2'), 
    showModal.classList.remove('active'),
    setTimeout(() => {
        showComplete.classList.remove('active2');
    }, 1500);
})

buttonNo.addEventListener('click', () => {
    return showModal.classList.remove('active');
})




















