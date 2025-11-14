// ---------- POPUP CONTACT FORM ----------
document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("contactBtn");
  const popup = document.getElementById("popupForm");
  const closePopup = document.getElementById("closePopup");

  if (contactBtn && popup && closePopup) {
    // Open the popup
    contactBtn.onclick = () => {
      popup.style.display = "flex";
    };

    // Close button
    closePopup.onclick = () => {
      popup.style.display = "none";
    };

    // Click outside the form
    window.onclick = (event) => {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    };
  }

  // Optional: Smooth scroll for "Know More" buttons
  const knowMore = document.getElementById("knowMore");
  if (knowMore) {
    knowMore.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "about.html";
    });
  }
});
