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
let mark = document.createTextNode('!');


let ticket = document.getElementById('text_welcome');
if (name && email) {
    ticket.appendChild(space);
    ticket.appendChild(node);
} else {
  ticket.appendChild(mark);
}



// Form

var url = new URL("http://127.0.0.1:5500/form.html");


url.searchParams.append('name', name);
url.searchParams.append('email', email);


const ticketbutton = document.getElementById('tickets_name');

ticketbutton.addEventListener("click", function() {
    window.location = url;
  });


  // Fade in animations


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});