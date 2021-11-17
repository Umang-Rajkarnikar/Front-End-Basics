var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(window.screen.width > 1000){
    if(window.scrollY === 0){
      document.querySelector(".navbar").style.backgroundColor = "transparent";
      document.querySelector(".navbar").style.color = "white";  
      document.querySelector(".navbar").style.transition = "background-color 0.1s linear";  
      const navItems = document.querySelectorAll(".nav-link")
      document.querySelector(".navbar-brand").style.color = "white";
      for (i = 0; i < navItems.length; ++i) {
        navItems[i].style.color = "white";
      }
    }
    else if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";

      document.querySelector(".navbar").style.backgroundColor = "rgba(255,255,255,0.9)";
      document.querySelector(".navbar").style.transition = "top 0.1s linear";  


      const navItems = document.querySelectorAll(".nav-link")
      document.querySelector(".navbar-brand").style.color = "#212529";
      for (i = 0; i < navItems.length; ++i) {
        navItems[i].style.color = "#212529";
      }
    } else {
      document.querySelector(".navbar").style.transition = "top 0.1s linear";  
      document.querySelector(".navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
}