function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//closing modal event
closeForm.addEventListener("click", closeModal)

//closing modal form
function closeModal() {
  modalbg.style.display = "none";
}

//validation of form 
const form = document.querySelector('form');
form.addEventListener("submit", (Event) => {
  Event.preventDefault();
  let formValid = true;

  //clean errors
  document.querySelectorAll('.formData').forEach((element) => {
    element.removeAttribute('data-error');
    element.setAttribute('data-error-visible', 'false');
  });

  //validation first
  const valueFirst = document.getElementById("first").value.trim();
  if (valueFirst.length < 2) {
    const firstData = document.getElementById('first').parentElement;
    firstData.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    firstData.setAttribute('data-error-visible', 'true');
    formValid = false;
  }
  
  //validation last
  const valueLast = document.getElementById("last").value.trim();  
  if (valueLast.length < 2) {
    const lastData = document.getElementById('last').parentElement;
    lastData.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    lastData.setAttribute('data-error-visible', 'true');
    formValid = false;
  }

  //validation email
  const valueEmail = document.getElementById("email").value;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regexEmail.test(valueEmail)) {
    const emailData = document.getElementById('email').parentElement;
    emailData.setAttribute('data-error', 'Veuillez entrer un e-mail correct.');
    emailData.setAttribute('data-error-visible', 'true');
    formValid = false;
  }

  //validation birthday
  const valueBirthdate = document.getElementById("birthdate").value;
  if (!valueBirthdate) {
    const birthdateData = document.getElementById('birthdate').parentElement;
    birthdateData.setAttribute('data-error', 'Vous devez entrer votre date de naissance.');
    birthdateData.setAttribute('data-error-visible', 'true');
    formValid = false;
  }

  //validationQuantity
  const valueQuantity = document.getElementById("quantity").value;
  const regexQuantity = /^\d+$/;
  if (!regexQuantity.test(valueQuantity)) {
    const quantityData = document.getElementById('quantity').parentElement;
    quantityData.setAttribute('data-error', 'Veuillez remplir le champ.');
    quantityData.setAttribute('data-error-visible', 'true');
    formValid = false
  }

  //validation radio
  const valueRadio = document.querySelector('input[name="location"]:checked');
  if (!valueRadio) {
    const radioData = document.querySelector('input[name="location"]').parentElement;
    radioData.setAttribute('data-error', 'Vous devez choisir une option.');
    radioData.setAttribute('data-error-visible', 'true');
    formValid = false
}

  //validation coche
  const valueCheckbox = document.getElementById("checkbox1").checked;
  if (!valueCheckbox) {
    const checkboxData = document.getElementById('checkbox1').parentElement;
    checkboxData.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.');
    checkboxData.setAttribute('data-error-visible', 'true');
    formValid = false
  }

  if (formValid) {
    //hide all form fields
    formData.forEach( (element) => {
    element.style.display = 'none';
    })
    //show dispatch message
    const message = document.querySelector('.message');
    message.style.display = 'block'; 

    //show close-button
    const btnClose = document.querySelector('.btn-close');
    btnClose.style.display = 'block';
    const btnSubmit = document.querySelector('.btn-submit');
    btnSubmit.style.display = 'none';
    btnClose.addEventListener('click', closeModal);

/*
    //changing the name and functionality of the button submit
    const button = document.querySelector('.btn-submit');
    button.value = 'Fermer';
    button.type = 'button';
    button.addEventListener("click", closeModal);
    function closeModal() {
      modalbg.style.display = "none";
    }*/
  }
});

