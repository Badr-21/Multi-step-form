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

const inputsStepOne = document.querySelectorAll('.step-one input');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const pRequired = document.querySelector('#required');
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
console.log(regexEmail.test('k@gmail.com'))

inputsStepOne.forEach(input => {
    input.addEventListener('focus', (e) => {
        if(e.target.value.length === 0) {
            e.target.previousElementSibling.lastElementChild.classList.add('required')
        }
    })
})

let nameValidate = nameInput.addEventListener('input', () => {
    nameInput.previousElementSibling.lastElementChild.classList.remove('required')
    return true
})

let emailValidate = emailInput.addEventListener('input', () => {
    if(!regexEmail.test(emailInput.value)) {
    emailInput.previousElementSibling.lastElementChild.classList.add('required')
    emailInput.previousElementSibling.lastElementChild.textContent = 'Invalid email format'
    }else {
        emailInput.previousElementSibling.lastElementChild.classList.remove('required')
        return true
    }
})

let phoneValidate = phoneInput.addEventListener('input', () => {
    if(!regexPhone.test(phoneInput.value)) {
    phoneInput.previousElementSibling.lastElementChild.classList.add('required')
    phoneInput.previousElementSibling.lastElementChild.textContent = 'Invalid phone format'
    }else {
        phoneInput.previousElementSibling.lastElementChild.classList.remove('required')
        return true
    }
})






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
    toNextStep(stepOne, stepTwo, sideBarStepOne, sideBarStepTwo)
})
goBackStepTwo.addEventListener('click', () => goBack(stepTwo, stepOne, sideBarStepTwo, sideBarStepOne))

nextStepTwo.addEventListener('click', () =>  toNextStep(stepTwo, stepThree, sideBarStepTwo, sideBarStepThree))
goBackStepThree.addEventListener('click', () => goBack(stepThree, stepTwo, sideBarStepThree, sideBarStepTwo))

nextStepThree.addEventListener('click', () =>  toNextStep(stepThree, stepFour, sideBarStepThree, sideBarStepFour))
goBackStepFour.addEventListener('click', () => goBack(stepFour, stepThree, sideBarStepFour, sideBarStepThree))

confirm.addEventListener('click', () => {
    steps.style.display= 'none'
    thankYou.style.display = 'flex'
})

