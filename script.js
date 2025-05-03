document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const toggleButtonIcon = document.querySelector(
    ".navbar .mobile-menu-toggle i"
  );
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    if (mobileMenu.classList.contains("active")) {
      toggleButtonIcon.classList.remove("fa-bars");
      toggleButtonIcon.classList.add("fa-x");
    } else if (!mobileMenu.classList.contains("active")) {
      toggleButtonIcon.classList.add("fa-bars");
      toggleButtonIcon.classList.remove("fa-x");
    }
  });
});
