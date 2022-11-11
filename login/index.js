const $login = document.querySelector("#login");
const $password = document.querySelector("#password");
const $output = document.querySelector("#form__output");
const $form = document.querySelector("#form");

const isNotValid = {
  login: true,
  password: true,
};

const checkValidator = () => {
  if (isNotValid.login && isNotValid.password) {
    $output.textContent = "Недопустимый символ в login и password";
  } else if (isNotValid.login) {
    $output.textContent = "Недопустимый символ в login";
  } else if (isNotValid.password) {
    $output.textContent = "Недопустимый символ в password";
  } else {
    $output.textContent = "";
  }
};

$login.addEventListener("input", () => {
  const { value } = $login;
  const regExp = /^[a-zA-Z0-9_]{5,18}$/;
  console.log(regExp.test(value));
  if (regExp.test(value)) {
    $login.style =
      "border: 1px solid transparent; border-radius: 0px; border-bottom-color: green;";
    isNotValid.login = false;
    checkValidator();
  } else {
    $login.style = "border: 1px solid red; border-radius: 5px;";
    isNotValid.login = true;
    checkValidator();
  }
});

$password.addEventListener("input", () => {
  const { value } = $password;
  const regExp = /^[^ <>/|\\а-яА-Я]{5,}$/;
  console.log(regExp.test(value));
  if (regExp.test(value)) {
    $password.style =
      "border: 1px solid transparent; border-radius: 0px; border-bottom-color: green;";
    isNotValid.password = false;
    checkValidator();
  } else {
    $password.style = "border: 1px solid red; border-radius: 5px;";
    isNotValid.password = true;
    checkValidator();
  }
});

$form.addEventListener("submit", (event) => {
  if (isNotValid.login === false && isNotValid.password === false) {
  } else {
    event.preventDefault();
  }
});
