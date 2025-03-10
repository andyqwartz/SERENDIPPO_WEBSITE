document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.querySelector('.menu-list');
    const icon1 = document.querySelector('.icon1');
    const icon2 = document.querySelector('.icon2');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const siteLogo = document.querySelector('.site-image');

    // Variables for logo click tracking (Lavender Easter Egg)
    let logoClickCount = 0;
    let logoClickTimer = null;
    const LOGO_CLICK_TIMEOUT = 500;
    const CLICKS_FOR_LAVENDER = 5;

    // Load stored theme preferences
    const storedDarkMode = localStorage.getItem('darkMode');
    const storedLavenderMode = localStorage.getItem('lavenderLatteMode');
    
    if (storedLavenderMode === 'true') {
        document.body.classList.add('lavender-latte-mode');
    } else if (storedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    } else if (storedDarkMode === 'false') {
        document.body.classList.remove('dark-mode');
    }

    // Function to handle dark mode toggle (moon only)
    function handleDarkModeToggle() {
        const body = document.body;
        
        // If Lavender Latte Mode is active, deactivate it and switch to Dark Mode
        if (body.classList.contains('lavender-latte-mode')) {
            body.classList.remove('lavender-latte-mode');
            localStorage.removeItem('lavenderLatteMode');
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
            showNotification('Lavender Latte Mode Deactivated - Dark Mode Activated', false);
            return;
        }
        
        // If currently in Dark Mode, switch to Light Mode
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
            showNotification('Light Mode Activated', false);
            return;
        }
        
        // If currently in Light Mode, switch to Dark Mode
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
        showNotification('Dark Mode Activated', false);
    }

    // Function to handle rapid logo clicks for lavender latte mode
    function handleLogoClicks() {
        logoClickCount++;
        
        if (logoClickTimer) {
            clearTimeout(logoClickTimer);
        }
        
        logoClickTimer = setTimeout(() => {
            if (logoClickCount >= CLICKS_FOR_LAVENDER) {
                const body = document.body;
                
                // Toggle Lavender Mode
                if (body.classList.contains('lavender-latte-mode')) {
                    // Désactiver Lavender Mode
                    body.classList.remove('lavender-latte-mode');
                    localStorage.removeItem('lavenderLatteMode');
                    showNotification('Lavender Latte Mode Deactivated', false);
                } else {
                    // Activer Lavender Mode
                    body.classList.remove('dark-mode'); // Enlever Dark Mode si actif
                    body.classList.add('lavender-latte-mode');
                    localStorage.setItem('lavenderLatteMode', 'true');
                    showNotification('Lavender Latte Mode Activated', true);
                }
            }
            logoClickCount = 0;
        }, LOGO_CLICK_TIMEOUT);
    }

    function showNotification(message, isLavender) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = isLavender ? '#ffffff' : '#fff';
        notification.style.color = isLavender ? '#6a5acd' : '#000';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '20px';
        notification.style.boxShadow = isLavender ? '0 2px 10px rgba(106, 90, 205, 0.3)' : '0 2px 10px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1000';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';
        notification.style.fontFamily = 'inherit';
        notification.style.fontWeight = isLavender ? '500' : 'normal';
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.style.opacity = '1', 10);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }

    // Gestion du menu
    if (menuIcon) {
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
    }

    // Gestion du click sur l'overlay
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.addEventListener('click', function () {
            menuList.classList.remove('show');
            icon1.style.display = 'block';
            icon2.style.display = 'none';
        });
    }
    
    // Gestion du dark mode toggle (lune uniquement)
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            handleDarkModeToggle();
        });
    }

    // Gestion des clics sur le logo (Easter Egg Lavender)
    if (siteLogo) {
        siteLogo.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogoClicks();
        });
    }
});
