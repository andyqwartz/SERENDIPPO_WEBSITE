document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.querySelector('.menu-list');
    const icon1 = document.querySelector('.icon1');
    const icon2 = document.querySelector('.icon2');
    const body = document.body;
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    document.querySelector('.menu').appendChild(themeToggle);

    // Dark mode toggle
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        themeToggle.innerHTML = body.classList.contains('dark-mode') ? '☀️' : '🌙';
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️';
    }

    // Logo click counter for Macchiato mode
    const logo = document.querySelector('.footer-description a');
    let clickCount = 0;
    let clickTimer;

    logo.addEventListener('click', function(e) {
        e.preventDefault();
        clickCount++;
        
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            if (clickCount === 5) {
                body.classList.toggle('macchiato-mode');
                localStorage.setItem('macchiatoMode', body.classList.contains('macchiato-mode'));
            }
            clickCount = 0;
        }, 1500);
    });

    // Check for saved Macchiato mode preference
    if (localStorage.getItem('macchiatoMode') === 'true') {
        body.classList.add('macchiato-mode');
    }

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

    if (typeof overlay !== 'undefined') {
        overlay.addEventListener('click', function () {
            menuList.classList.remove('show');
            icon1.style.display = 'block';
            icon2.style.display = 'none';
        });
    }
});
