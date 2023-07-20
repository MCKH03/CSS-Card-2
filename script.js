"use strict";

const btnBox = document.querySelector(".btn-box");
const btn = document.querySelector(".btn");
const subscribe = document.querySelector(".subscribe");
const reloadMessage = document.querySelector(".reload");
const confirm = document.querySelector(".confirm");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  btnBox.classList.add("btn-box-change");
  btn.classList.add("btn-change");
  subscribe.textContent = "Read the message!";
  confirm.textContent = "Subscribed!";
  reloadMessage.classList.add("show-reload");
});
