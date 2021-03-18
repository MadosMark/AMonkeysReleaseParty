
// Query string

const linkup = new URLSearchParams(window.location.search);
const namn = linkup.get("name");
const mail = linkup.get("email")




let holdah = document.getElementById('mail_holder');
if (mail === 'null') {
    holdah.value = ' exempel@exempel.se';
} else {
    holdah.value = mail;
}
let holla = document.getElementById('name_holder');
if (namn === 'null') {
    holla.textContent = 'Förhoppningsvis dig!'
} else {
    holla.textContent = namn;
}
