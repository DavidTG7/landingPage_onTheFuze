const mobileNavButton = document.querySelector(
  ".header_nav-menu-mobile button"
);
const mobileNavList = document.querySelector(".header_nav-menu-mobile ul");

mobileNavList.style.display = "none"

const handleMobileNav = () => {

  
  if (mobileNavButton.textContent === "X") {
    mobileNavButton.textContent = "|||"
    mobileNavList.style.display = "none"
  } else {
    mobileNavButton.textContent = "X"
    mobileNavList.style.display = "block"
  }
};
