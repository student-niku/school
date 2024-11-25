const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
//smooth scrolling
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//swiper js responsib
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    autoplay:{
		
    
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }
  });

gsap.from('.logo',{
    opacity:0,
    x:10,
    delay:.5,
    duration:1,
    stagger:.3,
})


gsap.from('.nav-links li a',{
      opacity:0,
      x:15,
      delay:.5,
      duration:1,
      stagger:.3,
})

gsap.from('.hero-section-headind-div h1',{
    opacity:0,
    y:-10,
    delay:.5,
    duration:1,
    stagger:.3,
})
gsap.from("#about-img-div",{
    opacity:0,
    x:100,
    scrollTrigger:".about #about-img-div",
    duration:1,
    stagger:1,


})
gsap.from('.hero-section-headind-div p',{
    opacity:0,
    y:10,
    delay:.5,
    duration:1,
    stagger:.3,
})

gsap.from('.card',{
    opacity:0,
    y:-30,
    duration:1,
    stagger:.5,
    scrollTrigger:".main-card .card"
})


            
gsap.from('.about-div1 h1',{
    opacity:0,
    y:-30,
    delay:.5,
    duration:1,
    scrollTrigger:".about .about-div1 h1"
})
gsap.from('.about-div1 p',{
    opacity:0,
    x:-30,
    delay:.5,
    duration:1,
    scrollTrigger:".about .about-div1 p"
})
gsap.from('.about-div1 .about-readmore',{
    opacity:0,
    y:30,
    delay:.5,
    duration:1,
    scrollTrigger:".about .about-div1 .about-readmore"
})
gsap.from('.teacher-head h1',{
    opacity:0,
    y:-40,
    delay:.5,
    duration:1,
    scrollTrigger:".teacher-main .teacher-head h1"
})
gsap.from('#teacher-card',{
    opacity:0,
    x:-60,
    delay:.5,
    duration:1,
    scrollTrigger:".teacher-main #teacher-card"
})
gsap.from('#teacher-card-right',{
    opacity:0,
    x:60,
    delay:.5,
    duration:1,
    scrollTrigger:".teacher-main #teacher-card-right"
})
gsap.from('#teacher-card-top',{
    opacity:0,
    y:-60,
    delay:.5,
    duration:1,
    scrollTrigger:".teacher-main #teacher-card-top"
})
gsap.from('#teacher-card-',{
    opacity:0,
    y:-60,
    delay:.5,
    duration:1,
    scrollTrigger:".teacher-main #teacher-card-top"
})