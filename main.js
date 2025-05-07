const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", function () {
  const isHidden = mobileMenu.classList.contains("hidden");

  if (isHidden) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("block");
  } else {
    mobileMenu.classList.remove("block");
    mobileMenu.classList.add("hidden");
  }
});


