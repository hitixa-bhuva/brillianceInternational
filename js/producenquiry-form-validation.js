const form = document.getElementById("product-contect-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting

  // Get all input values
  const fullname = form.fullname.value.trim();
  const company = form.company.value.trim();
  const product_category = form.product_category.value.trim();
  const product_name = form.product_name.value.trim();
  const message = form.message.value.trim();
  const quantity = form.quantity.value.trim();
  const number = form.number.value.trim();
  const email = form.email.value.trim();
  const date = form.date.value.trim();
  const Delivery = form.Delivery.value.trim();
  const web = form.web.value.trim();
  const Arrivalport = form.Arrivalport.value.trim();
  const country = form.country.value.trim();
  const Subject = form.Subject.value.trim();

  // Clear previous errors
  clearErrors();

  let isValid = true;

  // Fullname validation
  if (fullname === "") {
    showError("fullname", "Please enter your full name.");
    isValid = false;
  }

  // Company validation
  if (company === "") {
    showError("company", "Please enter your company name.");
    isValid = false;
  }

  // Product category validation
  if (product_category === "") {
    showError("product_category", "Please enter product category.");
    isValid = false;
  }

  // Product name validation
  if (product_name === "") {
    showError("product_name", "Please enter product name.");
    isValid = false;
  }

  // Message validation
  if (message === "") {
    showError("message", "Please enter your message.");
    isValid = false;
  }

  // Quantity validation
  if (quantity === "" || isNaN(quantity) || Number(quantity) <= 0) {
    showError("quantity", "Please enter a valid quantity.");
    isValid = false;
  }

  // Number (phone) validation
  if (!/^\d{10}$/.test(number)) {
    showError("number", "Please enter a valid 10-digit phone number.");
    isValid = false;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email", "Please enter a valid email address.");
    isValid = false;
  }

  // Date validation
  if (date === "") {
    showError("date", "Please select a date.");
    isValid = false;
  }

  // Delivery validation
  if (Delivery === "") {
    showError("Delivery", "Please enter delivery method.");
    isValid = false;
  }

  // Website validation (optional)
  if (web !== "" && !/^https?:\/\/[^\s]+$/.test(web)) {
    showError("web", "Please enter a valid URL.");
    isValid = false;
  }

  // Arrival port validation
  if (Arrivalport === "") {
    showError("Arrivalport", "Please enter arrival port.");
    isValid = false;
  }

  // Country validation
  if (country === "") {
    showError("country", "Please enter your country.");
    isValid = false;
  }

  // Subject validation
  if (Subject === "") {
    showError("Subject", "Please enter Subject.");
    isValid = false;
  }

  // If everything is valid
  if (isValid) {
    showToast("Your inquiry has been submitted successfully!");
    form.reset();
  }
});

function showError(id, message) {
  const field = document.getElementById(id);
  const error = document.createElement("div");
  error.className = "error-text";
  error.textContent = message;
  field.insertAdjacentElement("afterend", error); // ← FIXED LINE
  field.classList.add("is-invalid");
}


function clearErrors() {
  const errors = document.querySelectorAll(".error-text");
  errors.forEach(el => el.remove());

  const invalids = document.querySelectorAll(".is-invalid");
  invalids.forEach(el => el.classList.remove("is-invalid"));
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.querySelector(".toast-message").textContent = msg;
  toast.classList.add("show");

  // Auto-hide after 4 seconds
  setTimeout(hideToast, 4000);
}

function hideToast() {
  document.getElementById("toast").classList.remove("show");
}
