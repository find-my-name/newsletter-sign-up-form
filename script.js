const btn = document.querySelector(".btn");
const cancelBtn = document.querySelector(".dismiss");
const container = document.querySelector(".container");
const thanksCtr = document.querySelector(".thanks-msg");
const message = document.querySelector(".message");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const errorMsg = document.querySelector(".error");
  const email = document.querySelector(".email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.trim() === "" || !emailRegex.test(email.value.trim())) {
    errorMsg.innerHTML = "Valid email required";
    email.classList.add("error-input");
    container.classList.remove("hidden");
  } else {
    errorMsg.innerHTML = "";
    message.innerHTML = `
    A confirmation email has been sent to <b>${email.value.trim()}</b>.
    Please open it and click the button inside to confirm your subscription.`;
    email.classList.remove("error-input");
    container.classList.add("hidden");
    thanksCtr.classList.remove("hidden");
  }
});

cancelBtn.addEventListener("click", () => {
  const email = document.querySelector(".email");

  thanksCtr.classList.add("hidden");
  container.classList.remove("hidden");
  email.value = "";
});
