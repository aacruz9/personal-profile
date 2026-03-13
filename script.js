/**
 * Displays a random fun fact with a "pop-in" animation.
 */
function showFunFact() {
  const facts = [
    "I bike to work regularly in Las Piñas.",
    "I enjoy building small web apps that solve everyday problems.",
    "I like combining creativity and technology in my projects.",
    "I enjoy experimenting with new programming ideas and tools.",
  ];

  const factElement = document.getElementById("funFact");

  // Reset animation: remove class and trigger reflow
  factElement.classList.remove("show");
  void factElement.offsetWidth;

  // Select random fact
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  factElement.textContent = "“ " + randomFact + " ”";

  // Re-add class to trigger the CSS @keyframes
  factElement.classList.add("show");
}

/**
 * Handles the "Back to Top" button visibility and scrolling.
 */
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  // Show button after scrolling 300px
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
