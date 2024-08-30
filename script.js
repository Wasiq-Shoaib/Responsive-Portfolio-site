const sidemenu = document.querySelector("#sidemenu");

const navbar = document.querySelector("nav");
const nanLinks = document.querySelector("nav ul");

function openmenu() {
  sidemenu.style.transform = "translateX(-16rem)";
}
function closemenu() {
  sidemenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navbar.classList.add(
      "bg-grey",
      "backdrop-blur-lg",
      "shadow-sm",
      "bg-opacity-50"
    );
    nanLinks.classList.remove(
      "bg-grey",
      "backdrop-blur-lg",
      "shadow-sm",
      "bg-opacity-50"
    );
  } else {
    navbar.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
    nanLinks.classList.add("bg-grey", "shadow-sm", "bg-opacity-50");
  }
});
