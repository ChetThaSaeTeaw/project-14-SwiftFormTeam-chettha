/* Validation Login Page */
const Id = document.getElementById('Username');
const Password = document.getElementById('Password');
const validateId = document.getElementById('Validate__Id');
const validatePassword = document.getElementById('Validate__Password');
const form = document.getElementById('form');


/* Validation Login Page */
form.addEventListener('submit', (e) => {
    let messages = []
    if (Id.value === '' || Id.value == null) {
        validateId.style.display = 'block'
        Id.focus();
    }

    if (Password.value === '' || Password.value == null) {
        validatePassword.style.display = 'block';
        Password.focus();
    }

    if (Password.value.length <= 6 && Password.value.length > 1) {
        validatePassword.style.display = 'block';
        validatePassword.innerText = "Password must be more than 6 characters";
        Password.focus();
    }

    if (Password.value.length > 20) {
        validatePassword.style.display = 'block';
        validatePassword.innerText = "Password must be less than 20 characters";
        Password.focus();
    }
    e.preventDefault();
})

