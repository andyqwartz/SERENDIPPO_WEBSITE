// This script runs immediately to ensure the dark mode toggle exists
(function() {
  console.log("Ensure dark mode toggle script running");
  
  // Function to run when DOM is ready
  function ensureDarkModeToggle() {
    console.log("DOM ready, checking for dark mode toggle");
    
    // Check if the toggle exists
    if (!document.getElementById('dark-mode-toggle')) {
      console.log("Dark mode toggle not found, creating it immediately");
      
      // Create the toggle button
      var darkModeToggle = document.createElement('button');
      darkModeToggle.id = 'dark-mode-toggle';
      darkModeToggle.className = 'dark-mode-toggle';
      darkModeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
      
      // Apply inline styles for maximum visibility
      darkModeToggle.style.display = 'block';
      darkModeToggle.style.visibility = 'visible';
      darkModeToggle.style.opacity = '1';
      darkModeToggle.style.position = 'absolute';
      darkModeToggle.style.top = '25px';
      darkModeToggle.style.right = '25px';
      darkModeToggle.style.zIndex = '9999';
      darkModeToggle.style.color = '#000';
      darkModeToggle.style.fontSize = '1.5rem';
      darkModeToggle.style.backgroundColor = 'transparent';
      darkModeToggle.style.border = 'none';
      darkModeToggle.style.cursor = 'pointer';
      
      // Create the icon
      var icon = document.createElement('i');
      icon.className = 'fa fa-moon-o';
      icon.setAttribute('aria-hidden', 'true');
      
      // Apply inline styles to the icon
      icon.style.display = 'inline-block';
      icon.style.visibility = 'visible';
      icon.style.opacity = '1';
      
      // Append the icon to the button
      darkModeToggle.appendChild(icon);
      
      // Add to body as soon as it's available
      var addToggleToBody = function() {
        if (document.body) {
          // Try to insert after header if it exists
          var header = document.querySelector('.site-header');
          if (header && header.parentNode) {
            header.parentNode.insertBefore(darkModeToggle, header.nextSibling);
          } else {
            // Otherwise, insert at the beginning of body
            document.body.insertBefore(darkModeToggle, document.body.firstChild);
          }
          console.log("Dark mode toggle added to the page");
        } else {
          // Body not ready yet, try again in 10ms
          setTimeout(addToggleToBody, 10);
        }
      };
      
      // Start the process of adding to body
      addToggleToBody();
    }
  }
  
  // Run when DOM is ready or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureDarkModeToggle);
  } else {
    ensureDarkModeToggle();
  }
  
  // Also run when the window loads as a fallback
  window.addEventListener('load', ensureDarkModeToggle);
})(); 