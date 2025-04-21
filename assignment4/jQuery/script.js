// script.js

$(document).ready(function() {
    // Prevent form submission for demonstration purposes
    $("form").on("submit", function(event) {
      event.preventDefault();
      alert("Your message has been sent! We will get back to you shortly.");
    });
  });
  