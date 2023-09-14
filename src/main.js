function handleMenu() {
    const openMenu = document.querySelector(".navbar_open")
    const closeMenu = document.querySelector(".navbar_close")
    const menu = document.querySelector(".navbar_menu")
    
    openMenu.addEventListener("click", function() {
        openMenu.style.display = "none"
        closeMenu.style.display = "block"
        menu.classList.add("navbar_menu--show");
    })
    
    closeMenu.addEventListener("click", function() {
        closeMenu.style.display = "none"
        openMenu.style.display = "block"
        menu.classList.remove("navbar_menu--show");
    })

    menu.addEventListener("click", (e) => {
        if(e.target.classList.contains("item")){
            closeMenu.style.display = "none"
            openMenu.style.display = "block"
            menu.classList.remove("navbar_menu--show");
        }
    })
}


function main() {
    handleMenu()

}

window.addEventListener("load", main)