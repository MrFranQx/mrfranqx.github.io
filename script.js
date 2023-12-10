function footerMargin() {
    let f = document.getElementsByTagName("footer")[0];
    f.style.marginBottom = window.getComputedStyle(f).marginLeft;

}
function onScroll() {
    let scroll = window.scrollY;
    let button = document.getElementById("scrollup");
    if (scroll > 100)
        button.style.opacity = 1;
    else
        button.style.opacity = 0;
}
function scrollToTop() {
    window.scrollTo(0,0);
}
function setSublistWidth() {
    let menus = document.querySelector("nav").querySelector("ul").querySelectorAll("ul");
    for (let menu of menus) {
        menu.style.width = window.getComputedStyle(menu.parentElement).width;
    }
}

footerMargin();
setSublistWidth();

window.addEventListener("resize",footerMargin);
window.addEventListener("resize",setSublistWidth);
window.addEventListener("scroll",onScroll);
document.getElementById("scrollup").addEventListener("click",scrollToTop)