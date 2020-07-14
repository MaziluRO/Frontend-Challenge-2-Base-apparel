function ValidateEmail() {
  var icon = document.getElementById("alert-icon");
  var email = document.getElementById("email").value;
  var emailInput = document.getElementById("email");
  var errorText = document.getElementById("error-email");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    emailInput.classList.remove("red-border");
    icon.classList.add("d-none");
    icon.classList.remove("d-block");
    errorText.classList.remove("d-block");
    errorText.classList.add("d-none");
  } else {
    emailInput.classList.add("red-border");
    icon.classList.remove("d-none");
    icon.classList.add("d-block");
    errorText.classList.add("d-block");
    errorText.classList.remove("d-none");
  }
}
