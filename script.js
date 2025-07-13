const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// Tab switching
loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

// Login form submit handler
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('input[type="email"]').value.trim();
  const password = loginForm.querySelector('input[type="password"]').value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // TODO: Add real authentication here

  // If valid, redirect to dashboard
  window.location.href = "dashboard.html";
});
