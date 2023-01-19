const steps = document.querySelector('.steps');
const stepOne = document.querySelector('.step-one');
const stepTwo = document.querySelector('.step-two');
const stepThree = document.querySelector('.step-three');
const stepFour = document.querySelector('.step-four');
const thankYou = document.querySelector('.thank-you');

const nextStepOne = document.querySelector('#next-step-one');
const nextStepTwo = document.querySelector('#next-step-two');
const nextStepThree = document.querySelector('#next-step-three');
const goBackStepTwo = document.querySelector('#go-back-step-two');
const goBackStepThree = document.querySelector('#go-back-step-three');
const goBackStepFour = document.querySelector('#go-back-step-four');
const confirm = document.querySelector('#confirm');


const sideBarStepOne = document.querySelector('.your-info .step-number');
const sideBarStepTwo = document.querySelector('.select-plan .step-number');
const sideBarStepThree = document.querySelector('.add-on .step-number');
const sideBarStepFour = document.querySelector('.summary .step-number');



// start step one
const inputsStepOne = document.querySelectorAll('.step-one input');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const pRequired = document.querySelector('#required');
const regexEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
const regexPhone = /^[+]*(\d{1})[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{3})$/;
// console.log(/^[+]*(\d{1})[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{3})$/.test('+2 166 523 455'))

inputsStepOne.forEach(input => {
    input.addEventListener('focus', (e) => {
        if(e.target.value.length === 0) {
            e.target.classList.add("error")
            e.target.previousElementSibling.lastElementChild.classList.add('required')
        }
    })
})

nameInput.addEventListener('input', () => {
    if(nameInput.value.length > 0) {
        nameInput.classList.remove("error")
        nameInput.previousElementSibling.lastElementChild.classList.remove('required')
    }else if(nameInput.value.length === 0) {
        nameInput.classList.add("error")
        nameInput.previousElementSibling.lastElementChild.classList.add('required')
    }
    
})

emailInput.addEventListener('input', () => {
    if(!regexEmail.test(emailInput.value)) {
        emailInput.previousElementSibling.lastElementChild.classList.add('required')
        emailInput.previousElementSibling.lastElementChild.textContent = 'Invalid email format'
        emailInput.classList.add("error")
    }else {
        emailInput.previousElementSibling.lastElementChild.classList.remove('required')
        emailInput.classList.remove("error")
    }

})

phoneInput.addEventListener('keydown', () => {
    if(!regexPhone.test(phoneInput.value)) {
        phoneInput.previousElementSibling.lastElementChild.classList.add('required')
        phoneInput.previousElementSibling.lastElementChild.textContent = 'Invalid phone format'
        phoneInput.classList.add("error")
    }else {
        phoneInput.previousElementSibling.lastElementChild.classList.remove('required')
        phoneInput.classList.remove("error")
    }
})


let inputs =  Array.from(inputsStepOne)
function validationStepOne() {
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].classList.contains('error')) return true
    } 
}

function toNextStep(stepToDisplayNone, stepToDisplayFlex, stepActive, stepInactive) {
        stepToDisplayNone.style.display= 'none'
        stepToDisplayFlex.style.display = 'flex'
        stepActive.classList.remove('active')
        stepInactive.classList.add('active')
}
function goBack(stepToDisplayNone, stepToDisplayFlex, stepActive, stepInactive) {
    stepToDisplayNone.style.display= 'none'
    stepToDisplayFlex.style.display = 'flex'
    stepActive.classList.remove('active')
    stepInactive.classList.add('active')
}

nextStepOne.addEventListener('click', () => {
    if(!nameInput.value || !emailInput || !phoneInput) {
        for(let i = 0; i < inputs.length; i++) {
            if(!inputs[i].classList.contains('error') && !inputs[i].value) {
                inputs[i].classList.add("error")
                inputs[i].previousElementSibling.lastElementChild.classList.add('required')
            }
        }return 
    }else { 
        if(validationStepOne()) return
    }
    toNextStep(stepOne, stepTwo, sideBarStepOne, sideBarStepTwo)
})
// end step one
// start step two

const options = document.querySelectorAll('.options > div')
const twoMonthFree = document.querySelectorAll('.two-months-free');
const toggle = document.querySelector('.toggle');
const optionList = Array.from(options)

options.forEach(option => {
    option.addEventListener("click", () => {
        if(option.classList.contains('active')) {
            option.classList.remove('active')
        }else {
            for(let i = 0; i < optionList.length; i++) {
                optionList[i].classList.remove('active')
            }
            option.classList.add('active')
        }
    })
})

toggle.addEventListener('click', () => {
    if(toggle.checked) {
        twoMonthFree.forEach(p => {
            p.style.display = 'block'
        })
    }else {
        twoMonthFree.forEach(p => {
            p.style.display = 'none'
        })
    }
    
})

goBackStepTwo.addEventListener('click', () => goBack(stepTwo, stepOne, sideBarStepTwo, sideBarStepOne))
nextStepTwo.addEventListener('click', () =>  toNextStep(stepTwo, stepThree, sideBarStepTwo, sideBarStepThree))

// end step two
// start step three
const services = document.querySelectorAll('.services > div');
const checkboxes = document.querySelectorAll('[type="checkbox"]')

services.forEach(service => {
    service.addEventListener('click', () => {
        if(!service.classList.contains('active')) {
            service.classList.add('active')
            service.firstElementChild.firstElementChild.setAttribute('checked', '')
        }else {
            service.classList.remove('active')
            service.firstElementChild.firstElementChild.removeAttribute('checked')
        }
    })
})

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (e) => {
        if(checkbox.checked) {
            checkbox.parentElement.parentElement.classList.remove('active') 
        }else {
            checkbox.parentElement.parentElement.classList.add('active') 
        }
    })
})

goBackStepThree.addEventListener('click', () => {
    goBack(stepThree, stepTwo, sideBarStepThree, sideBarStepTwo)
})
nextStepThree.addEventListener('click', () =>  {
    toNextStep(stepThree, stepFour, sideBarStepThree, sideBarStepFour)
})
// end step three
// start step four


goBackStepFour.addEventListener('click', () => goBack(stepFour, stepThree, sideBarStepFour, sideBarStepThree))
confirm.addEventListener('click', () => {
    steps.style.display= 'none'
    thankYou.style.display = 'flex'
})

