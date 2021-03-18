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
const email = params.get("email")


let node = document.createTextNode(name + '!');
let space = document.createTextNode('\u00A0');


let ticket = document.getElementById('text_welcome');
if (name && email) {
    ticket.appendChild(space);
    ticket.appendChild(node);
}



// Form

var url = new URL("http://127.0.0.1:5500/form.html");


url.searchParams.append('name', name);
url.searchParams.append('email', email);


const ticketbutton = document.getElementById('tickets_name');

ticketbutton.addEventListener("click", function() {
    window.location = url;
  });