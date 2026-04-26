function darkMode() {
  let theme = document.getElementById("theme-style");
  
  if (theme.getAttribute("href") === "index.css") {
    theme.setAttribute("href", "darkmode.css");
  } else {
    theme.setAttribute("href", "index.css");
  }
}