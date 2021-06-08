var mobileMenu = document.getElementById("mobile-menu");
var navContainer = document.querySelector(".container");
var typography = document.querySelector(".typography");

function openMobileMenu() {
  mobileMenu.style.display = "block";
  typography.style.display = "none";
}

function closeMobileMenu() {
  mobileMenu.style.display = "none";
  typography.style.display = "block";
}

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navContainer.style.backgroundColor = "deepskyblue";
    navContainer.style.position = "fixed";
    navContainer.style.zIndex = "100";
    typography.style.display = "none";
  } else {
    typography.style.display = "block";
    navContainer.style.backgroundColor = "transparent";
    mobileMenu.style.display = "none";
  }
}
