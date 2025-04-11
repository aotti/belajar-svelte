type EventType = SubmitEvent & {currentTarget: EventTarget & HTMLFormElement}

export function validateRegistration(ev: EventType) {
    ev.preventDefault()
    console.log('validating registration');
    
    const errorContainer = document.querySelector('#error')
    const formInputs = ev.currentTarget.elements
    // validate params
    let validate = null
    const confirmPasswords = []
    for(let input of formInputs) {
        const inputElement = input as HTMLInputElement
        // validate input
        if(inputElement.nodeName == 'INPUT') {
            switch(inputElement.id) {
                case 'email': 
                    validate = inputElement.value.match(/^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/)
                    if(!validate) return errorContainer!.textContent = `${inputElement.id} does not valid`
                    break
                case 'first_name': 
                case 'last_name': 
                    validate = inputElement.value.match(/^[a-zA-Z\s]+$/)
                    if(!validate) return errorContainer!.textContent = `${inputElement.id} does not valid`
                    break
                case 'password': 
                    confirmPasswords.push(inputElement.value)
                    break
                case 'confirm_password': 
                    confirmPasswords.push(inputElement.value)
                    // match password \w confirm_password
                    if(confirmPasswords[0] != confirmPasswords[1]) return errorContainer!.textContent = 'password doesnt match'
                    break
                default: 
                    errorContainer!.textContent = 'unknown input'
            }
        }
    }
    errorContainer!.textContent = 'register success'
    console.log('registration validated');
}

export function validateCreateRoom(ev: EventType) {
    ev.preventDefault()
    console.log('validating create room');
    
}

export function validateChatting(ev: EventType) {
    ev.preventDefault()
    console.log('validating chatting');
    
}