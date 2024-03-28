const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');

// };

// const isValidEmail = email => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.text(string(email).tolowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

//     if(nameValue == '') {
//         setError(username, 'Full name is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue == '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

    // if (passwordValue == '') {
    //     setError(username, 'Password is required');
    // } else if (passwordValue.length < 8) {
    //     setError(password, 'Password must be at least 8 character')
    // } else {
    //     setError(password);
    // }
    // if (password2Value === '') {
    //     setError(password2, 'Please confirm your password');
    // } else if (password2Value !== passwordValue) {
    //     setError(password2, "Password doesn't match");
    // } else {
    //     setSuccess(password2);
    // }
//};




