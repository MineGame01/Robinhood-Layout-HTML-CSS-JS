{
    const menu = document.querySelector(".header__menu");
    const openMenuButton = document.querySelector(".header__open-menu");

    openMenuButton.onclick = function() {
        menu.attributes[0].value = menu.attributes[0].value === "false" ?
            "true" : "false"
    }
}