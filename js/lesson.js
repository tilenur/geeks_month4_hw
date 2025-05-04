// PHONE BLOCK

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

// \+ - is just a symbol with \
// d{2} - means 2 digits - \d\d
// /^________$/ - means that the string must start and end with the regular expression

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

// .test - checks if the string matches the regular expression

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "NOT OK";
    phoneResult.style.color = "red";
  }
};
