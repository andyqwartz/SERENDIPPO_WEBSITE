document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.querySelector('.menu-list');
    const icon1 = document.querySelector('.icon1');
    const icon2 = document.querySelector('.icon2');

    menuIcon.addEventListener('click', function () {
        menuList.classList.toggle('show');
    
        // Toggle between icon1 and icon2 when the menu is activated
        if (menuList.classList.contains('show')) {
            icon1.style.display = 'none';
            icon2.style.display = 'block';
        } else {
            icon1.style.display = 'block';
            icon2.style.display = 'none';
        }
    });

    overlay.addEventListener('click', function () {
        menuList.classList.remove('show');

        // Switch back to icon1 when the overlay is clicked to close the menu
        icon1.style.display = 'block';
        icon2.style.display = 'none';
    });
});
