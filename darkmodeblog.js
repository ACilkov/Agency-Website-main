// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "blogstylesheet.css"
  if (theme.getAttribute("href") == "blogstylesheet.css") {
    // ... then switch it to "darkmodeblog.css"
    theme.href = "blogdarkmode.css";
  // Otherwise...
  } else {
    // ... switch it to "blogstylesheet.css"
    theme.href = "blogstylesheet.css";
  }
});