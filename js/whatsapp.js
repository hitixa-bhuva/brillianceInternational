// whatsapp
function redirectToWhatsApp() {
    var phoneNumber = "+919274557070"; // Replace with your WhatsApp number
    var message = ""; // Optional: Replace with your default message
    var url =
      "https://api.whatsapp.com/send?phone=" +
      encodeURIComponent(phoneNumber) +
      "&text=" +
      encodeURIComponent(message);
    window.open(url, "_blank");
  }
  