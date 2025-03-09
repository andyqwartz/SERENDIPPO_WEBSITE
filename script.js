document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.querySelector('.menu-list');
    const icon1 = document.querySelector('.icon1');
    const icon2 = document.querySelector('.icon2');
    const body = document.body;

    // Create and add moon toggle to footer
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    document.querySelector('.footer').appendChild(themeToggle);

    // Dark mode toggle
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '☀️';
            body.classList.remove('lavender-latte-mode');
        } else {
            themeToggle.innerHTML = '🌙';
        }
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️';
    }

    // Logo click counter for Lavender Latte mode
    const logo = document.querySelector('.footer-description a');
    let clickCount = 0;
    let clickTimer;

    logo.addEventListener('click', function(e) {
        e.preventDefault();
        clickCount++;
        
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            if (clickCount === 5) {
                body.classList.toggle('lavender-latte-mode');
                if (body.classList.contains('lavender-latte-mode')) {
                    body.classList.remove('dark-mode');
                    themeToggle.innerHTML = '🌙';
                }
                localStorage.setItem('lavenderLatteMode', body.classList.contains('lavender-latte-mode'));
            }
            clickCount = 0;
        }, 1500);
    });

    // Check for saved Lavender Latte mode preference
    if (localStorage.getItem('lavenderLatteMode') === 'true') {
        body.classList.add('lavender-latte-mode');
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '🌙';
    }

    menuIcon.addEventListener('click', function () {
        menuList.classList.toggle('show');
        if (menuList.classList.contains('show')) {
            icon1.style.display = 'none';
            icon2.style.display = 'block';
        } else {
            icon1.style.display = 'block';
            icon2.style.display = 'none';
        }
    });

    // Ensure consistent footer across all pages
    const footerSocialContainer = document.querySelector('.social-icons-container');
    if (footerSocialContainer) {
        const socialLinks = footerSocialContainer.innerHTML;
        document.querySelectorAll('.footer .social-icons-container').forEach(container => {
            container.innerHTML = socialLinks;
        });
    }
});
