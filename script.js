//Navigation for mobile and tablet

const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const navMenu = document.querySelector(".menu-nav-mobile");

//Attach eventlisteners and toggle navigation-open class
openBtn.addEventListener("click", () => {
  navMenu.classList.toggle("navigation-open");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.toggle("navigation-open");
});

//Form validation in Contact Section
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");

const messageInput = document.querySelector("textarea[name='message']");
const thankYou = document.querySelector(".thank-you");

//console.log(form);

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);

messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, messageInput];

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let isFormValid = false;
isValidationOn = false;

const resetEl = (el) => {
  el.classList.remove("invalid");
  el.nextElementSibling.classList.add("hide");
};

const invalidateEl = (el) => {
  el.classList.add("invalid");
  el.nextElementSibling.classList.remove("hide");
};

const validateInputs = () => {
  if (!isValidationOn) return;

  isFormValid = true;
  inputFields.forEach(resetEl);

  if (!nameInput.value) {
    isFormValid = false;
    invalidateEl(nameInput);
  }
  if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalidateEl(emailInput);
  }
  if (!messageInput.value) {
    isFormValid = false;
    invalidateEl(messageInput);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;

  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.classList.remove("hide");
  } // FOR THANK YOU msg may not need this*/
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));
