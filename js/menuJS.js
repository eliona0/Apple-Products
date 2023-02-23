// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);


// $(document).ready(function(){
//   $(window).scroll(function (){
//     if($(this).scrollTop() > 50){
//       $(".nav").css({"opacity": "0"})
//     }
//     else
//       $(".nav").css({"opacity": "1"})
//       }
//   })

// var elements = document.querySelectorAll( 'body *' );
// $(window).scroll(function(){
//     $("h2").css("opacity", 1 - $(window).scrollTop() / $("h2").offset().top); 
//     $("p").css("opacity", 1 - $(window).scrollTop() / $("p").offset().top); 
// });


let elementsArray = document.querySelectorAll(".Breakfast");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();

let elementsArrayy = document.querySelectorAll(".first-container");
console.log(elementsArrayy);
window.addEventListener('scroll', fadeInn ); 
function fadeInn() {
    for (var i = 0; i < elementsArrayy.length; i++) {
        var elemm = elementsArrayy[i]
        var distInView = elemm.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elemm.classList.add("inView");
        } else {
            elemm.classList.remove("inView");
        }
    }
}
fadeInn();


let elementsArrayyy = document.querySelectorAll(".footer-col");
console.log(elementsArrayyy);
window.addEventListener('scroll', fadeInnn ); 
function fadeInnn() {
    for (var i = 0; i < elementsArrayyy.length; i++) {
        var elemmm = elementsArrayyy[i]
        var distInView = elemmm.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elemmm.classList.add("inView");
        } else {
            elemmm.classList.remove("inView");
        }
    }
}
fadeInnn();
