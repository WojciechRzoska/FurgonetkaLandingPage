const form = document.querySelector('.form__wrapper');
const phoneNumber = document.getElementById('phoneNumber');
const name = document.getElementById('name');
const surnameOrCompany = document.getElementById('surnameOrCompany');
const email = document.getElementById('email');

const letters = /^[A-Za-z]+$/;
const errorRequiredField = 'To pole jest wymagane';

const showError = (input, message) => {
  const formControl = input.parentElement;
  input.className = 'form__input form__input--error';
  const error = formControl.querySelector('.form__inputErrorMessage');

  error.innerText = message;
};
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.querySelector('.form__inputErrorMessage').innerText = '';
  input.className = 'form__input';
};

const checkEmail = (input) => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.value === '') {
    showError(input, errorRequiredField);
    return false;
  } else if (!input.value.match(pattern)) {
    showError(input, 'Email nie jest poprawny');
    return false;
  } else {
    showSuccess(input);
    return true;
  }
};

const checkPhoneNumber = (input) => {
  const pattern = '[0-9]{9}';
  if (input.value === '') {
    showError(input, errorRequiredField);
    return false;
  } else if (!input.value.match(pattern)) {
    showError(input, 'Niepoprawny numer telefonu');
    return false;
  } else {
    showSuccess(input);
    return true;
  }
};

const checkText = (input) => {
  const pattern = '[A-Za-z]{1,32}';
  if (input.value === '') {
    showError(input, errorRequiredField);
    return false;
  } else if (!input.value.match(pattern)) {
    showError(input, 'Zły ciąg znaków');
    return false;
  } else {
    showSuccess(input);
    return true;
  }
};
form.addEventListener('submit', (e) => {
  const phoneValidate = checkPhoneNumber(phoneNumber);
  const emailValidate = checkEmail(email);
  const nameValidate = checkText(name);
  const surnameOrCompanyValidate = checkText(surnameOrCompany);

  if (
    !phoneValidate ||
    !emailValidate ||
    !nameValidate ||
    !surnameOrCompanyValidate
  ) {
    e.preventDefault();
  }
});
