document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.querySelector('.menu-list');
    const icon1 = document.querySelector('.icon1');
    const icon2 = document.querySelector('.icon2');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

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

    // Check if overlay exists before adding event listener
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.addEventListener('click', function () {
            menuList.classList.remove('show');

            // Switch back to icon1 when the overlay is clicked to close the menu
            icon1.style.display = 'block';
            icon2.style.display = 'none';
        });
    }
    
    // Only handle dark mode toggle override if it exists
    if (darkModeToggle) {
        // Add a custom click event that checks for purple macchiato mode
        darkModeToggle.addEventListener('click', function(e) {
            // If in purple macchiato mode, prevent default action and do nothing
            if (document.body.classList.contains('purple-macchiato-mode')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }, true); // Use capturing to ensure we handle the event first
    }

    // Secret Purple Macchiato Mode
    const logo = document.querySelector('.site-image');
    let clickCount = 0;
    let clickTimer;

    if (logo) {
        logo.addEventListener('click', function(e) {
            // Prevent default behavior if any
            e.preventDefault();
            
            // Increment click counter
            clickCount++;
            
            // Clear previous timer
            clearTimeout(clickTimer);
            
            // Set a new timer - if 2 seconds pass without a click, reset counter
            clickTimer = setTimeout(function() {
                clickCount = 0;
            }, 2000);
            
            // Check if 5 clicks have been reached
            if (clickCount === 5) {
                // Toggle purple macchiato mode and remove dark mode if active
                if (!document.body.classList.contains('purple-macchiato-mode')) {
                    // Activating purple macchiato mode
                    document.body.classList.add('purple-macchiato-mode');
                    // Remove dark mode if it's active
                    document.body.classList.remove('dark-mode');
                    
                    // Fix the moon icon if it exists (remove background frame)
                    const moonIcon = document.querySelector('.dark-mode-toggle i');
                    if (moonIcon) {
                        moonIcon.style.backgroundColor = 'transparent';
                        moonIcon.parentElement.style.backgroundColor = 'transparent';
                        // Apply white color filter
                        moonIcon.style.filter = 'brightness(0) invert(1)';
                    }
                } else {
                    // Deactivating purple macchiato mode
                    document.body.classList.remove('purple-macchiato-mode');
                }
                
                // Reset click counter
                clickCount = 0;
                
                // Show a subtle indication that secret mode is activated
                const notification = document.createElement('div');
                notification.textContent = 'Purple Macchiato Mode ' + 
                    (document.body.classList.contains('purple-macchiato-mode') ? 'Activated' : 'Deactivated');
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.left = '50%';
                notification.style.transform = 'translateX(-50%)';
                notification.style.backgroundColor = document.body.classList.contains('purple-macchiato-mode') ? '#9370DB' : '#fff';
                notification.style.color = document.body.classList.contains('purple-macchiato-mode') ? '#fff' : '#000';
                notification.style.padding = '10px 20px';
                notification.style.borderRadius = '5px';
                notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
                notification.style.zIndex = '1000';
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.3s';
                
                document.body.appendChild(notification);
                
                // Fade in
                setTimeout(function() {
                    notification.style.opacity = '1';
                }, 10);
                
                // Remove notification after 3 seconds
                setTimeout(function() {
                    notification.style.opacity = '0';
                    setTimeout(function() {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            }
        });
    }
});
