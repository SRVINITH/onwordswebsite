window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  var navItem = document.querySelector("nav-item");
  header.classList.toggle("sticky", window.scrollY > 0)
  navItem.classList.toogle("nav-a", window.scrollY > 0)
})

// --fade animation---//
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// ---fade animation end---//
// --carousel start----//
var $owl = $('.owl-carousel');

$owl.children().each(function (index) {
  $(this).attr('data-position', index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: true,
  loop: true,
  items: 5,
});

$(document).on('click', '.owl-item>div', function () {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});
// ---carousel end---//
$(document).ready(function () {

  $(".owl-carousel").owlCarousel({

    autoPlay: 3000,
    items: 1,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    center: true,
    nav: true,
    loop: true,
    responsive: {
      600: {
        items: 4
      }
    }
  });

});

function dayMode(){
  const BodyTag = document.getElementById('bodyTag')
  const footer = document.querySelectorAll('.footer-list')
  const dayBright = document.getElementById('daybright')
  // const moduleborder = document.getElementById('.module-border-wrap')
  // const module = document.getElementById('.module')
  // const secondSection = document.querySelector('.second-section')
  const moon = document.getElementById('moon')
  BodyTag.style.backgroundColor='#f0f0f0'
  BodyTag.style.color='#232323'
  dayBright.style.display='none'
  // module.style.backgroundColor='none'
  // moduleborder.style.background='none'
  // secondSection.style.backgroundColor='#f0f0f0'
  // secondSection.style.color='#232323'
  moon.style.display='block'
  
  for (const footers of footer) {
    footers.style.color ='#232323'
  }
}
function nightMode(){
  const BodyTag = document.getElementById('bodyTag')
  const dayBright = document.getElementById('daybright')
  const moon = document.getElementById('moon')
  const footer = document.querySelectorAll('.footer-list')
  BodyTag.style.backgroundColor='#040507'
  BodyTag.style.color='#fff'
  dayBright.style.display='block'
  moon.style.display='none'
  for (const footers of footer) {
    footers.style.color ='#fff'
  }
}