// JavaScript: Toggle Menu and Form Submission

// Function to toggle the hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Contact Form Submission

document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      // Send the form data using Fetch API
      const response = await fetch(
        "https://formsubmit.co/ajax/alientotherapy@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        const result = await response.json(); // Parse JSON response
        console.log("Success Response:", result); // Log the success response

        // Show the toast notification
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";

        // Automatically hide the notification after 3 seconds
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 3000);

        // Reset the form
        document.getElementById("contact-form").reset();
      } else {
        alert(
          "There was an error sending your message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  });
    // Get the button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show the button when scrolling down
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    // Scroll to the top when the button is clicked
    scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });