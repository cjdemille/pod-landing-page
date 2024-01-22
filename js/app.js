const invalidText = document.querySelector('.invalid-text');
const emailInput = document.querySelector('.email-form__input');
const submit = document.querySelector('.email-form__btn')

const validateEmail = (e) =>{
    e.preventDefault();

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailInput.value.match(validRegex)){
        invalidText.classList.remove('show');
    }else{
        invalidText.classList.add('show');
    }
}

submit.addEventListener('click', validateEmail)