const email = document.getElementById('email-input')
const submitBtn = document.getElementById('submitBtn')
const message = document.getElementById('message')
const form = document.getElementById('form')

const homePage = document.getElementById('home-page')
const successPage = document.getElementById('submitted-success')

const dismissBtn = document.getElementById('dismissBtn')
const emailInfo = document.getElementById('bolded')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    validateEmail()
})


const setError = (mess) => {
    email.classList.add('error')
    message.classList.remove('hide')
    message.innerHTML = mess
}

const setSuccess = () => {
    const emailValue = email.value
    homePage.classList.add('hide')
    successPage.classList.remove('hide')
    emailInfo.innerText = ''
    emailInfo.innerText = emailValue
    email.classList.remove('error')
    message.classList.add('hide')
    message.innerText = ''
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

dismissBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dismissMessage()
})


const dismissMessage = () => {
    homePage.classList.remove('hide')
    successPage.classList.add('hide')
    email.value = ''
}