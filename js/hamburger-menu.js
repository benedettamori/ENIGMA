function toggleMenu () {

    let x = document.getElementById("home-nav-mobile");


    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else
    {
        x.style.display = "flex";
    }
}

function toggleSubMenu() {
    let x = document.getElementById("mobile-menu-sub-section");

    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else
    {
        x.style.display = "flex";
    }

}