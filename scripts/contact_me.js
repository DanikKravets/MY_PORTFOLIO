preloader = document.querySelector('.preloader')

setTimeout(() => {
    body.style.display = 'block'
    preloader.style.display = 'none'
}, 1000)


const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')

const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    validateInput()
})

const validateInput = () => {

    let email = emailInput.value
    let textarea = textareaInput.value

    if (!email && !textarea) {
        setError(emailInput.parentElement)
        setError(textareaInput.parentElement)
        showMessage("Please fill the required fields")
    }
    else if (!email && textarea) {
        setError(emailInput.parentElement)
        showMessage("Oops! fill the email please!")
    }
    else if (email && !textarea) {
        setError(textareaInput.parentElement)
        showMessage("Oops! fill the message please!")
    }
    else if (email && textarea) {
        emailjs.sendForm("service_6ixpt58", "template_4b94lon", contactForm, "1D_YQTvFB31d2ai-Z");
        setSuccess(emailInput.parentElement)
        setSuccess(textareaInput.parentElement)
        showMessage("Message sent to me successfully", "rgb(14, 207, 14)")
        textareaInput.value = ''
        emailInput.value = ''
        subjectInput.value = ''
        nameInput.value = ''
    }
}


const setError = (input) => {
    if (input.classList.contains("success")) {
        input.classList.remove("success")
    } else {
        input.classList.add("error")
        setTimeout(() => {
            input.classList.remove("error")
        }, 2000)
    }
}

const setSuccess = (input) => {
    if (input.classList.contains("error")) {
        input.classList.remove("error")
    } else {
        input.classList.add("success")
        setTimeout(() => {
            input.classList.remove("success")
        }, 2000)
    }
}

const messageDiv = document.querySelector('.message')

const showMessage = (message, updateColor) => {
    const divContent = document.createElement('div')
    divContent.textContent = message
    divContent.classList.add("message-content")
    divContent.style.backgroundColor = updateColor
    messageDiv.prepend(divContent)

    messageDiv.style.transform = `translate(${(0, 0)}%)`

    setTimeout(() => {
        divContent.classList.add("hide")
        divContent.addEventListener("transitionend", () => {
            divContent.remove()

        })
    }, 2000)
} 