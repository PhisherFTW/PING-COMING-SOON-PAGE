let email = document.getElementById('email');
let error = document.getElementById('error');
let button = document.getElementById('btn');

error.style.opacity = '0'
button.addEventListener('click', checkemail);

//email input must have a red outline


function checkemail () {
    console.log(email.value)
    if(email.value == '') {
        error.style.opacity = '1'
        email.style.borderColor = 'red'
    } else if (email.value.includes('@') && email.value.includes('.')) {
        error.style.opacity = '0'
        email.style.borderColor = 'green'
    } else {
        error.style.opacity = '1'
        email.style.borderColor = 'red'
    }
}