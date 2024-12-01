//timer js

// Set the countdown date (you can adjust the end date to match your promotion)

let countdownDate = new Date().getTime() + 86400000;

// Update the countdown every 1 second
let countdownFunction = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  // Calculate time units
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown ends, display a message
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

AOS.init({
  offset: 120,
  duration: 600,
  easing: "ease",
  once: true,
});

//Faq js

// Select all FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");

// Add click event listener to each FAQ question
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("i");

    // Toggle the 'open' class to display/hide the answer
    answer.classList.toggle("open");

    // Toggle the rotation of the icon
    question.classList.toggle("open");
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

//Modal js

// Select modal elements
const claimSpotBtns = document.querySelectorAll(".claim-spot"); // Correct the selector to ".claim-spot"
const popupModal = document.getElementById("popup-modal");
const closeModalBtn = document.getElementById("close-modal");

// Show the modal when any "Claim Your Spot" button is clicked
claimSpotBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default action (if any)
    popupModal.style.display = "flex"; // Show the modal
  });
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener("click", () => {
  popupModal.style.display = "none"; // Hide the modal
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === popupModal) {
    popupModal.style.display = "none";
  }
});

// Close the modal when clicking outside of it
window.addEventListener("click", (e) => {
  if (e.target === popupModal) {
    popupModal.style.display = "none";
  }
});

// contact form js

// Handle form submission
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us! We will get back to you shortly.");
  e.target.reset(); // Clear the form
});
