/**
 * Script de gestion du mode sombre
 * Permet de basculer entre le mode clair et sombre
 * et sauvegarde la préférence de l'utilisateur
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log("Dark mode script loaded");
  
  // First check if the toggle exists
  let darkModeToggle = document.getElementById('dark-mode-toggle');
  
  // If it doesn't exist, create it
  if (!darkModeToggle) {
    console.log("Dark mode toggle not found, creating it dynamically");
    darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
    
    // Create the icon
    const icon = document.createElement('i');
    icon.className = 'fa fa-moon-o';
    icon.setAttribute('aria-hidden', 'true');
    
    // Append the icon to the button
    darkModeToggle.appendChild(icon);
    
    // Insert the toggle after the header
    const header = document.querySelector('.site-header');
    if (header && header.parentNode) {
      header.parentNode.insertBefore(darkModeToggle, header.nextSibling);
    } else {
      // Fallback - insert at the beginning of the body
      document.body.insertBefore(darkModeToggle, document.body.firstChild);
    }
  }
  
  const body = document.body;
  const icon = darkModeToggle.querySelector('i');
  
  // If icon is still not found, create it
  if (!icon && darkModeToggle) {
    const newIcon = document.createElement('i');
    newIcon.className = 'fa fa-moon-o';
    newIcon.setAttribute('aria-hidden', 'true');
    darkModeToggle.appendChild(newIcon);
  }
  
  // Par défaut, commencer en mode clair (sans classe dark-mode)
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
  }
  
  // Fonction pour appliquer le mode sombre ou clair
  function applyDarkMode(isDark) {
    console.log("Applying mode:", isDark ? "dark" : "light");
    if (isDark) {
      body.classList.add('dark-mode');
      const currentIcon = darkModeToggle.querySelector('i');
      if (currentIcon) {
        currentIcon.classList.remove('fa-moon-o');
        currentIcon.classList.add('fa-sun-o');
      }
    } else {
      body.classList.remove('dark-mode');
      const currentIcon = darkModeToggle.querySelector('i');
      if (currentIcon) {
        currentIcon.classList.remove('fa-sun-o');
        currentIcon.classList.add('fa-moon-o');
      }
    }
  }
  
  // Détection initiale du mode système
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const systemPrefersDark = darkModeMediaQuery.matches;
  console.log("System preference:", systemPrefersDark ? "dark" : "light");
  
  // Vérifier si l'utilisateur a une préférence enregistrée
  const userPreference = localStorage.getItem('darkMode');
  console.log("User preference:", userPreference);
  
  // Appliquer le bon mode
  if (userPreference === 'true') {
    console.log("Using user preference: dark mode");
    applyDarkMode(true);
  } else if (userPreference === 'false') {
    console.log("Using user preference: light mode");
    applyDarkMode(false);
  } else {
    console.log("No user preference, using system preference");
    // Si pas de préférence utilisateur, utiliser la préférence système
    applyDarkMode(systemPrefersDark);
  }
  
  // Écouter les changements de préférence système
  try {
    // Using the modern addEventListener instead of deprecated addListener
    darkModeMediaQuery.addEventListener('change', function(e) {
      const newIsDark = e.matches;
      console.log("System preference changed to:", newIsDark ? "dark" : "light");
      // Appliquer seulement si l'utilisateur n'a pas défini de préférence
      if (localStorage.getItem('darkMode') === null) {
        applyDarkMode(newIsDark);
      }
    });
  } catch (error) {
    console.log("Error with media query listener:", error);
    // Try alternative approach
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        const newIsDark = e.matches;
        if (localStorage.getItem('darkMode') === null) {
          applyDarkMode(newIsDark);
        }
      });
    } catch (fallbackError) {
      console.log("Fallback also failed:", fallbackError);
    }
  }
  
  // Gestionnaire de clic sur le bouton
  darkModeToggle.addEventListener('click', function() {
    const isDarkMode = !body.classList.contains('dark-mode');
    console.log("Toggle clicked, setting mode to:", isDarkMode ? "dark" : "light");
    applyDarkMode(isDarkMode);
    localStorage.setItem('darkMode', String(isDarkMode));
  });
  
  // Make the toggle visible with inline style as a last resort
  darkModeToggle.style.display = 'block';
  darkModeToggle.style.visibility = 'visible';
  darkModeToggle.style.opacity = '1';
  darkModeToggle.style.position = 'absolute';
  darkModeToggle.style.top = '25px';
  darkModeToggle.style.right = '25px';
  darkModeToggle.style.zIndex = '100';
  darkModeToggle.style.color = body.classList.contains('dark-mode') ? '#fff' : '#000';
  darkModeToggle.style.fontSize = '1.5rem';
  darkModeToggle.style.backgroundColor = 'transparent';
  darkModeToggle.style.border = 'none';
  darkModeToggle.style.cursor = 'pointer';
}); 