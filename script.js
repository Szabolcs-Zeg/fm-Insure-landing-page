document.getElementById("hamburger").addEventListener("click", menusw)

function menusw() {
    document.body.classList.toggle('lock-scroll')
    document.getElementById("hamburger").classList.toggle("showedmenu")
    document.getElementById("mainmenu").classList.toggle("showedmenu")
    
}