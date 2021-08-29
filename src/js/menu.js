const menu_links = document.querySelectorAll(".nav__link");
window.addEventListener('scroll', function () {
    let winScroll = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / scrollHeight) * 100;
    document.querySelector(".slider.slider_active").style.width = scrolled + "%";
})