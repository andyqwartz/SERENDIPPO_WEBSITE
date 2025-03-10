// This script runs immediately to ensure the dark mode toggle exists
(function() {
  console.log("Ensure dark mode toggle script running");
  
  // Function to run when DOM is ready
  function ensureDarkModeToggle() {
    console.log("DOM ready, checking for dark mode toggle");
    
    // Create container if it doesn't exist
    if (!document.getElementById('dark-mode-container')) {
      const container = document.createElement('div');
      container.id = 'dark-mode-container';
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.right = '0';
      container.style.width = '80px';
      container.style.height = '80px';
      container.style.zIndex = '999999';
      document.body.appendChild(container);
    }

    // Create or update toggle button
    if (!document.getElementById('dark-mode-toggle')) {
      const darkModeToggle = document.createElement('button');
      darkModeToggle.id = 'dark-mode-toggle';
      darkModeToggle.className = 'dark-mode-toggle';
      darkModeToggle.setAttribute('aria-label', 'Toggle Dark Mode');

      // Create the moon icon with proper Font Awesome classes
      const icon = document.createElement('i');
      icon.className = 'fa fa-moon-o';
      icon.setAttribute('aria-hidden', 'true');
      
      // Ensure proper Font Awesome styling
      icon.style.fontFamily = 'FontAwesome';
      icon.style.display = 'inline-block';
      icon.style.textRendering = 'auto';
      icon.style.WebkitFontSmoothing = 'antialiased';
      icon.style.MozOsxFontSmoothing = 'grayscale';
      
      darkModeToggle.appendChild(icon);
      document.getElementById('dark-mode-container').appendChild(darkModeToggle);
    }
  }
  
  // Ensure the toggle exists when the DOM is ready
  document.addEventListener('DOMContentLoaded', ensureDarkModeToggle);

  // Run immediately in case the DOM is already loaded
  ensureDarkModeToggle();

  // Also run on load to ensure it exists
  window.addEventListener('load', ensureDarkModeToggle);
})(); 