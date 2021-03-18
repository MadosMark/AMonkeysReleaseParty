
// Query string

const linkup = new URLSearchParams(window.location.search);
const namn = linkup.get("name");
const mail = linkup.get("email")




let holdah = document.getElementById('mail_holder');
if (mail) {
    holdah.value = mail;
} else {
    holdah.value = ' exempel@exempel.se';
}
let holla = document.getElementById('name_holder');
if (namn) {
    holla.textContent = namn;
} else {
    holla.textContent = 'Förhoppningsvis dig!'
}
