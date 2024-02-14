const email = document.getElementById('email-input')
const submitBtn = document.getElementById('submitBtn')
const message = document.getElementById('message')
const form = document.getElementById('form')

const homePage = document.getElementById('home-page')
const successPage = document.getElementById('submitted-success')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    validateEmail()
})

const setError = (mess) => {
    message.classList.remove('hide')
    message.innerHTML = mess
}

const setSuccess = () => {
    homePage.classList.add('hide')
    successPage.classList.remove('hide')
}

const validEmail = (emailValue) => {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailReg.test(String(emailValue).toLowerCase())
}

const validateEmail = () => {
    const emailValue = email.value

    if(emailValue === ''){
        setError('Please enter an email address!')
    }  else if(!validEmail(emailValue)){
        setError('Please enter a valid email address!')
    } else{
        setSuccess()
    }
}