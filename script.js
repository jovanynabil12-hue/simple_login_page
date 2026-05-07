const page = document.getElementById("page");
const oldSwitch = document.getElementById("oldSwitch");
const switchRocker = document.getElementById("switchRocker");
const lampGlow = document.getElementById("lampGlow");
const lampBeam = document.getElementById("lampBeam");
const lampInnerLight = document.getElementById("lampInnerLight");
const loginWrap = document.getElementById("loginWrap");
const cardLight = document.getElementById("cardLight");
const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClosed = document.getElementById("eyeClosed");

let lampOn = false;

function turnLampOn() {
  lampOn = true;

  page.classList.add("lights-on");
  switchRocker.classList.add("on");
  lampGlow.classList.add("on");
  lampBeam.classList.add("on");
  lampInnerLight.classList.add("on");
  cardLight.classList.add("on");

  loginWrap.classList.remove("hidden");
  loginWrap.classList.add("show");
}

function turnLampOff() {
  lampOn = false;

  page.classList.remove("lights-on");
  switchRocker.classList.remove("on");
  lampGlow.classList.remove("on");
  lampBeam.classList.remove("on");
  lampInnerLight.classList.remove("on");
  cardLight.classList.remove("on");

  loginWrap.classList.remove("show");
  loginWrap.classList.add("hidden");
}

function toggleLamp() {
  if (lampOn) {
    turnLampOff();
  } else {
    turnLampOn();
  }
}

function togglePasswordView() {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";
  eyeOpen.classList.toggle("hidden-eye", isPassword);
  eyeClosed.classList.toggle("hidden-eye", !isPassword);
}

oldSwitch.addEventListener("click", toggleLamp);
togglePassword.addEventListener("click", togglePasswordView);