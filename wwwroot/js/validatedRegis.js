const submitForm = document.getElementById('submit-form');

const inputName = document.getElementById('Input__Name');
const validatedName = document.getElementById('validated__name');

const inputUserName = document.getElementById('Username2');
const validatedUserName = document.getElementById('validated__username');

const inputEmail = document.getElementById('Input__email');
const validatedEmail = document.getElementById('validated__email');

const inputPassword = document.getElementById('Input__Password');
const validatedPassword = document.getElementById('validated__password');

const inputConfirmPass = document.getElementById('Input__ConfirmPass');
const validataedConfirmPass = document.getElementById('validated__confirm');

submitForm.addEventListener('submit', e => {
    if (inputConfirmPass.value === '' || inputConfirmPass.value == null) {
        validataedConfirmPass.style.display = 'block';
        inputConfirmPass.focus();
    }

    if (inputPassword.value === '' || inputPassword.value == null) {
        validatedPassword.style.display = 'block';
        inputPassword.focus();
    }

    if(inputEmail.value === '' || inputEmail.value == null) {
        validatedEmail.style.display = 'block';
        inputEmail.focus();
    }

    if (inputUserName.value === '' || inputUserName.value == null) {
        validatedUserName.style.display = 'block';
        inputUserName.focus();
    }
    if(inputName.value === '' || inputName.value == null) {
        validatedName.style.display = 'block';
        inputName.focus();
    }
   
    e.preventDefault();
})