const header = document.querySelector(".header")
const handleScroll = (_) => {
  if (window.pageYOffset > 25) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active")
  }
};
window.addEventListener("scroll", handleScroll);





const myButton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


