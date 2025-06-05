
  const form = document.getElementById("contact-Inquiry-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from submitting

    // Get all input values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Name validation
    if (name === "") {
      showError("name", "Please enter your name.");
      isValid = false;
    }

    // Email validation
    if (email === "") {
      showError("email", "Please enter your email.");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email", "Please enter a valid email.");
      isValid = false;
    }

    // Phone validation
    if (phone === "") {
      showError("phone", "Please enter your phone.");
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      showError("phone", "Enter 10 digit valid phone number.");
      isValid = false;
    }

    // Subject validation
    if (subject === "") {
      showError("subject", "Please enter the subject.");
      isValid = false;
    }

    // Message validation
    if (message === "") {
      showError("message", "Please enter your message.");
      isValid = false;
    }

    if (isValid) {
      // Simulate form submission
      showToast("Your inquiry has been submitted successfully!");
      form.reset();
    }
  });

  function showError(id, message) {
    const field = document.getElementById(id);
    const error = document.createElement("div");
    error.className = "error-text";
    error.textContent = message;
    field.parentNode.appendChild(error);
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

    // Auto hide after 4 seconds
    setTimeout(hideToast, 4000);
  }

  function hideToast() {
    document.getElementById("toast").classList.remove("show");
  }