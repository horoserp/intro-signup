const form = document.getElementById("my-form");
const inputs = document.getElementsByClassName("validate");
const divs = document.getElementsByClassName("error");
const validEmail = new RegExp(
  "^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$"
);

form.addEventListener("submit", validateForm);

function validateForm() {
  for (let key in inputs) {
    if (inputs[key].value == "" && key < 4) {
      inputs[key].classList.add("invalid");
      divs[key].innerHTML = inputs[key].name + " cannot be empty";
    } else if (key == 2) {
      if (!validEmail.test(inputs[key].value)) {
        divs[key].innerHTML = "Looks like this is not an email";
        inputs[key].classList.add("invalid");
      } else {
        divs[key].innerHTML = "";
        inputs[key].classList.remove("invalid");
      }
    } else if (key < 4) {
      inputs[key].classList.remove("invalid");
      divs[key].innerHTML = "";
    }
  }
  allowSubmit();
}

function allowSubmit() {
  let ok = true;
  for (let i = 0; i < 4; i++) {
    if (inputs[i].classList.contains("invalid")) {
      ok = false;
    }
  }
  if (ok) {
    alert(
      "Thank you " +
        inputs[0].value +
        " " +
        inputs[1].value +
        " for registering. We will send a confirmation email to: " +
        inputs[2].value +
        ". Your password is: " +
        inputs[3].value +
        "."
    );
    form.reset();
  }
}

function terms() {
  alert("This is not real. There are no Terms and Services.");
}
