const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'नाव आवश्यक आहे');
    } else {
        showSuccess(username);
    }

    if (lastname.value === '') {
        showError(lastname, 'आडनाव आवश्यक आहे');
    } else {
        showSuccess(lastname);
    }

    if (email.value === '') {
        showError(email, 'ईमेल आवश्यक आहे');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'पासवर्ड आवश्यक आहे');
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'पासवर्डची पुष्टी आवश्यक आहे');
    } else {
        showSuccess(password2);
    }
});