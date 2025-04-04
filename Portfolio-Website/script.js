document.getElementById("contact-form")?.addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Grab form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simple form validation
    if (name && email && message) {
      document.getElementById("form-status").innerHTML = "<p>✅ Message sent successfully!</p>";
      document.getElementById("form-status").style.color = "green";
  
      // Simulate form submission (e.g., sending to a server)
      console.log("Form Submitted:", { name, email, message });
  
      // Clear form fields
      document.getElementById("contact-form").reset();
    } else {
      document.getElementById("form-status").innerHTML = "<p>⚠️ Please fill out all fields.</p>";
      document.getElementById("form-status").style.color = "red";
    }
  });
  
