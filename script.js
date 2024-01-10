document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const menuList = document.querySelector('.menu-list');
    const overlay = document.querySelector('.overlay');

    mobileMenuButton.addEventListener('click', function () {
        menuList.classList.toggle('show');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', function () {
        menuList.classList.remove('show');
        overlay.classList.remove('show');
    });
});
