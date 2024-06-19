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
  const valueFirst = document.getElementById("first").value;
  if (valueFirst.length < 5) {
    const firstData = document.getElementById('first').parentElement;
    firstData.setAttribute('data-error', 'Veuillez entrer 5 caractères ou plus pour le champ du prénom.');
    firstData.setAttribute('data-error-visible', 'true');
    formValid = false;
  }
  
  //validation last
  const valueLast = document.getElementById("last").value;  
  if (valueLast.length < 5) {
    const lastData = document.getElementById('last').parentElement;
    lastData.setAttribute('data-error', 'Veuillez entrer 5 caractères ou plus pour le champ du nom.');
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

    //clean form
    const container = document.querySelector('.modal-body');
    container.innerHTML = '';

    //create message
    const messageEnvoi = document.createElement('div');
    messageEnvoi.textContent = 'Merci pour votre inscription';
    container.appendChild(messageEnvoi);

    //create button
    const btnClose = document.createElement('button');
    btnClose.textContent = 'Fermer';
    btnClose.classList.add('button');
    container.appendChild(btnClose);
    btnClose.addEventListener('click', () => {
      modalbg.style.display = 'none';
    })
  }
});

