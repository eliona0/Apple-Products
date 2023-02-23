let elementsArray = document.querySelectorAll(".flex-box");
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

let elementsArrayy = document.querySelectorAll(".ourstory");
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
