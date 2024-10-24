document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form')

  const successBlock = document.getElementById('success-block');

  const errorElements = {
    firstName: document.querySelector('.error-first-name'),
    lastName: document.querySelector('.error-last-name'),
    email: document.querySelector('.error-email'),
    validEmail: document.querySelector('.error-valid-email'),
    query: document.querySelector('.error-query'),
    message: document.querySelector('.error-message'),
    consent: document.querySelector('.error-consent'),
  }

  const inputElements = {
      firstName: document.getElementById('first-name'),
      lastName: document.getElementById('last-name'),
      email: document.getElementById('email'),
      message: document.getElementById('message'),
      consent: document.getElementById('consent'),
    }
  
  form.addEventListener('submit', function(e){
    e.preventDefault();

    firstName = inputElements.firstName.value.trim();
    lastName = inputElements.lastName.value.trim();
    email = inputElements.email.value.trim();
    message = inputElements.message.value.trim();
    consentChecked = inputElements.consent.checked;
    queryTypeChecked = document.querySelector('input[name="query-type"]:checked'); // Correctly checks selected radio button

    toggleError(errorElements.firstName, firstName);
    toggleError(errorElements.lastName, lastName);
    toggleError(errorElements.email, email);
    toggleError(errorElements.validEmail, validEmail(email));
    toggleError(errorElements.message, message);
    toggleError(errorElements.query, queryTypeChecked);
    toggleError(errorElements.consent, consentChecked);


    if(!firstName || !lastName || !email || !validEmail(email) || !message || !queryTypeChecked || !consentChecked){
      console.error('Form not submitted')
      return
    }


    successBlock.style.display = 'block';
    console.log('Form Submitted Correctly') 
  })

  function toggleError(element, isValid){
    element.style.display = isValid ? 'none' : 'block';
  }

  function validEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailPattern.test(email));
    return emailPattern.test(email);
  }
})