// common.js

// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks"); // to be added and fix
  navLinks.classList.toggle("open");
}

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const fullInfo = document.getElementById("full");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grab values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (!name || !email || !message) {
        fullInfo.textContent = "⚠️ Please fill in all fields.";
        fullInfo.style.color = "red";
        return;
      }

      // Simple email check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        fullInfo.textContent = "⚠️ Please enter a valid email address.";
        fullInfo.style.color = "red";
        return;
      }

      // Success message
      fullInfo.textContent = `✅ Thank you, ${name}! We’ll get back to you at ${email}.`;
      fullInfo.style.color = "green";

      // Reset form
      contactForm.reset();
    });
  }
});
