"use strict";

const btnSignIn = document.querySelector("#singIn");
const btnLogIn = document.querySelector("#logIn");
const modalTitle = document.querySelector(".modal-title");
const modalPersonal = document.querySelector(".modal-personal");
const reminder = document.querySelector(".reminder");
const submitButton = document.querySelector(".modal-submit");
const passwordField = document.querySelector(".password");

function showSignUp() {
  modalPersonal.classList.add("active");
  reminder.classList.add("hidden");
  btnSignIn.classList.add("active");
  btnLogIn.classList.remove("active");
  modalTitle.textContent = "Sign Up for Free";
  submitButton.textContent = "GET STARTED";
  passwordField.textContent = "Set a password";
}

function showLogIn() {
  modalPersonal.classList.remove("active");
  reminder.classList.remove("hidden");
  btnSignIn.classList.remove("active");
  btnLogIn.classList.add("active");
  modalTitle.textContent = "Welcome Back!";
  submitButton.textContent = "LOG IN";
  passwordField.textContent = "Password";
}
btnSignIn.addEventListener("click", showSignUp);
btnLogIn.addEventListener("click", showLogIn);
