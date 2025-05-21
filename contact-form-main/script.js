const form = document.getElementById('contact-form')
const successMessage = document.getElementById('success-message')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const firstName = document.getElementById('first-name').value.trim()
  const lastName = document.getElementById('last-name').value.trim()
  const email = document.getElementById('email').value.trim()
  const queryType = document.querySelector('input[name="query-type"]:checked')
  const message = document.getElementById('message').value.trim()
  const consent = document.getElementById('consent').checked

  const formAlert = document.querySelectorAll('.form-alert')

  let isValid = true

  if(firstName === '') {
    isValid = false

    document.querySelector('#first-name + .form-alert').style.display = 'block'
    document.querySelector('#first-name').style.border = '1px solid var(--red)'
  } else {
    document.querySelector('#first-name + .form-alert').style.display = 'none'
    document.querySelector('#first-name').style.border = '1px solid var(--medium-grey)'
  }


  if(lastName === '') {
    isValid = false

    document.querySelector('#last-name + .form-alert').style.display = 'block'
    document.querySelector('#last-name').style.border = '1px solid var(--red)'
  } else {
    document.querySelector('#last-name + .form-alert').style.display = 'none'
    document.querySelector('#last-name').style.border = '1px solid var(--medium-grey)'
  }

  if(!isvalidEmail(email)) {
    isValid = false;

    document.querySelector('#email + .form-alert').style.display = 'block'
    document.querySelector('#email').style.border = '1px solid var(--red)'
  } else {
    document.querySelector('#email + .form-alert').style.display = 'none'
    document.querySelector('#email').style.border = '1px solid var(--medium-grey)'
  }

  if(!queryType) {
    isValid = false

    document.querySelector('.radio-input + .form-alert').style.display = 'block'
  } else {
    document.querySelector('.radio-input + .form-alert').style.display = 'none'
  }

  if(message === '') {
    isValid = false

    document.querySelector('#message + .form-alert').style.display = 'block'
    document.querySelector('#message').style.border = '1px solid var(--red)'
  } else {
    document.querySelector('#message + .form-alert').style.display = 'none'
    document.querySelector('#message').style.border = '1px solid var(--medium-grey)'
  }

  if(!consent) {
    isValid = false

    formAlert[5].style.display = 'block'
  } else {
    formAlert[5].style.display = 'none'
  }

  if(isValid) {
    successMessage.classList.add('active')
    form.reset()
  }
})


function isvalidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email)
}