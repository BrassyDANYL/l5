var scrolled;
window.onscroll = function () {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if (scrolled > 1000) {
      $(".header").css({ "background": "black" })
   }
   if (100 > scrolled) {
      $(".header").css({ "background": "white" })
   }

}