



function darkMode() {
  let theme = document.getElementById("theme-style");
  
  if (theme.getAttribute("href") === "index.css") {
    theme.setAttribute("href", "darkmode.css");
  } else {
    theme.setAttribute("href", "index.css");
  }

  let darkModeBtn = document.getElementsByClassName("dark-mode-btn")[0];
  if (theme.getAttribute("href") === "darkmode.css") {
    darkModeBtn.innerHTML = "Light Mode";
  } else {
    darkModeBtn.innerHTML = "Dark Mode";
  }
}

  


// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}




// HIDE MENU
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}




// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction))





// NAVBAR SCROLL EFFECT

let lastScroll = 0; //Previous scroll position

const scrollNav = () => {
  const header = document.getElementById("header"),
  currentScroll = window.scrollY;

  //If the header scrolls down beyond 800px, collapse the header
  if (currentScroll > lastScroll && currentScroll >= 800){
    header.classList.add("scroll-nav");
  } else {
    header.classList.remove("scroll-nav");
  }

  //Save the current scroll position to compare it in the next event
  lastScroll =currentScroll
}
window.addEventListener("scroll", scrollNav)

