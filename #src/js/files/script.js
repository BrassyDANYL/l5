var scrolled;
window.onscroll = function () {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if (scrolled > 100) {
      $(".header").css({ "background": "black" })
      $(".menu-body").css({ "top": "-35px" })
      $(".icon-menu").css({ "top": "10px" })
      $(".logo").css({ "top": "0px" })
      $(".icon-menu").css({"background-color" : "black"})
      $(".header").css({ "background-color": "black" })
      
     
   }
   if (100 > scrolled) {
      $(".header").css({ "background": "" })
      $(".menu-body").css({ "top": "-15px" })
      $(".icon-menu").css({"top": "30px"})
      $(".logo").css({ "top": "20px" })
      $(".icon-menu").css({ "background-color": "rgba(255,255,255,0.1)" })
      $(".header").css({ "background-color": "" })
   }

};



$(document).ready(function () {
   function checkWidth() {
      var windowWidth = $('text').innerWidth(),
         elem = $(".number-bullets"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
      // страницу для поиска нужного элемента
      if (windowWidth < 992) {
         elem.removeClass('col');
         elem.addClass('');
      }
      else {
         elem.removeClass('');
         elem.addClass('col');
      }
   }
   

   checkWidth(); // проверит при загрузке страницы

   $(window).resize(function () {
      checkWidth(); // проверит при изменении размера окна клиента
   });
});




$(document).ready(function () {
   $('.sliderr').slick({
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
         {
            breakpoint: 1183,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
});
$(document).ready(function () {
   function checkWidth() {
      var windowWidth = $('body').innerWidth(),
         elem = $(".menu-body"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
      // страницу для поиска нужного элемента
      if (windowWidth < 768) {
         elem.removeClass('col');
         elem.addClass('');
      }
      else {
         elem.removeClass('');
         elem.addClass('col');
      }
   }


   checkWidth(); // проверит при загрузке страницы

   $(window).resize(function () {
      checkWidth(); // проверит при изменении размера окна клиента
   });
});
$(document).ready(function () {
   function checkWidth() {
      var windowWidth = $('body').innerWidth(),
         elem = $(".image"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
      // страницу для поиска нужного элемента
      if (windowWidth < 961) {
         elem.removeClass('col');
         elem.addClass('');
      }
      else {
         elem.removeClass('');
         elem.addClass('col');
      }
   }


   checkWidth(); // проверит при загрузке страницы

   $(window).resize(function () {
      checkWidth(); // проверит при изменении размера окна клиента
   });
});


