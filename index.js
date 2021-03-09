// Rotate function

let vinylDisc = document.querySelector(".vinyl_disc")

setTimeout(animationChanges, 6200); 

function animationChanges() { 
    vinylDisc.style.transition = `6000ms`
    vinylDisc.style.animationTimingFunction = "linear";
    vinylDisc.style.animationDelay = `2s`

}








// const params = new URLSearchParams(window.location.search);

// https://reactgo.com/javascript-get-query-parameters/?Namn=Mark