export const navbarChangeColorOnScroll = () => {
    const nav = document.getElementById('navbar');

    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            nav.classList.add("scrolled");
        }
        else {
            nav.classList.remove("scrolled");
        }
    };
}