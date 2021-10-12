// Bring in toggle buttons (querySelectorAll)
const toggles = document.querySelectorAll(".faq-toggle");

// Loop through nodelist (forEach)

toggles.forEach((toggle) => {
  // Add click event(addEventListener)

  toggle.addEventListener("click", () => {
    // Toggle the active class on the parent node(.parentNode & classList.toggle())

    toggle.parentNode.classList.toggle("active");
  });
});
