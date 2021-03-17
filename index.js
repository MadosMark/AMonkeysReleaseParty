// Rotate function

let vinylDisc = document.querySelector(".vinyl_disc")

setTimeout(animationChanges, 6200);

function animationChanges() {
    vinylDisc.style.transition = `6000ms`
    vinylDisc.style.animationTimingFunction = "linear";
    vinylDisc.style.animationDelay = `2s`

}

// Query String

const params = new URLSearchParams(window.location.search);
const name = params.get("name");
console.log(name);


// 

