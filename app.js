// Grabbing SIGN UP submit button
const signUp = document.querySelector("#signUp");
// Grabbing FORM
const form = document.querySelector("form");
// Grabbing 1st password
const password = document.querySelector("#password");
// Grabbing re entered password
const confirmPassword = document.querySelector("#confirm-password");
// Grabbing msg container
const errorMsg = document.querySelector(".error");
// Grabbing msg container
const successMsg = document.querySelector(".success");
// Grabbing title P tag
const titleP = document.querySelector(".title p");

// global variables
let isValid = false;
let passwordsMatch = false;

// =================================================
// Toggle Error message class on
const showErrorMsg = () => {
  errorMsg.classList.add("error-msg");
  titleP.classList.add("hide");
};

// Toggle Error message class on
const hideErrorMsg = () => {
  errorMsg.classList.remove("error-msg");
  titleP.classList.remove("hide");
};

// Toggle Success message class on
const showSuccessMsg = () => {
  successMsg.classList.add("success-msg");
  titleP.classList.add("hide");
};

// Toggle Success message class on
const hideSuccessMsg = () => {
  successMsg.classList.remove("success-msg");
  titleP.classList.remove("hide");
};
// =================================================

// Form info validator
const validateForm = () => {
  // Using constraint API
  isValid = form.checkValidity();
  if (!isValid) {
    return;
  }
};

// Form process func
const processFormData = (e) => {
  e.preventDefault();
  validateForm();

  // Checks to see if passwords are matching
  if (password.value === confirmPassword.value) {
    passwordsMatch = true;
    hideErrorMsg();
  } else {
    isValid = false;
    showErrorMsg();
    return;
  }
  // if form is valid and passwords match then display success msg
  if (passwordsMatch && isValid) {
    showSuccessMsg();
    hideErrorMsg();
    storeFormData();
  }
};

// Store form data
const storeFormData = () => {
  const user = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
  };

  console.log(user);
};

// Event Listenrs
// Form event on submit
form.addEventListener("submit", processFormData);
