console.log("Loaded register");

// Konstanter

const form = document.querySelector("form");
const nameOutput = document.querySelector("#name_output");
const emailOutput = document.querySelector("#email_output");
const phoneOutput = document.querySelector("#phone_output");
const supportOutput = document.querySelector("#support_output");
const areaOutput = document.querySelector("#area_output");
const experienceOutput = document.querySelector("#experience_output");
const supportYes = document.querySelector("#support_yes");
const supportNo = document.querySelector("#support_no");
const kommune = document.querySelector("#kommune");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function toggleOn() {
  console.log("toggle on function loaded");
  document.querySelector("#area_section").classList.remove("form_hide");
  kommune.classList.remove("form_hide");
  document.querySelector("#think").classList.add("form_hide");
}

function toggleOff() {
  console.log("toggle off function loaded");
  document.querySelector("#area_section").classList.add("form_hide");
  kommune.classList.add("form_hide");
  document.querySelector("#think").classList.remove("form_hide");
}

function handleSubmit(event) {
  event.preventDefault();

  // Samle værdier
  const formData = new FormData(form);
  const name = formData.get("name_input");
  const email = formData.get("email_input");
  const phone = formData.get("phone_input");
  const support = formData.get("support");
  const area = formData.get("area");
  const experience = formData.get("experience");

  // Vise værdier
  nameOutput.textContent = name;
  emailOutput.textContent = email;
  phoneOutput.textContent = phone;
  supportOutput.textContent = support;
  areaOutput.textContent = area;
  experienceOutput.textContent = experience;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
supportYes.addEventListener("click", toggleOn);
supportNo.addEventListener("click", toggleOff);
