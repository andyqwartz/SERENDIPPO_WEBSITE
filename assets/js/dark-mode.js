/**
 * Script de gestion du mode sombre
 * Permet de basculer entre le mode clair et sombre
 * et sauvegarde la préférence de l'utilisateur
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log("Dark mode script loaded");
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const icon = darkModeToggle.querySelector('i');
  
  // Par défaut, commencer en mode clair (sans classe dark-mode)
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
  }
  
  // Fonction pour appliquer le mode sombre ou clair
  function applyDarkMode(isDark) {
    console.log("Applying mode:", isDark ? "dark" : "light");
    if (isDark) {
      body.classList.add('dark-mode');
      if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    } else {
      body.classList.remove('dark-mode');
      if (icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
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
    // Fallback pour les navigateurs plus anciens
    darkModeMediaQuery.addListener(function(e) {
      const newIsDark = e.matches;
      console.log("System preference changed to:", newIsDark ? "dark" : "light");
      if (localStorage.getItem('darkMode') === null) {
        applyDarkMode(newIsDark);
      }
    });
  }
  
  // Gestionnaire de clic sur le bouton
  darkModeToggle.addEventListener('click', function() {
    const isDarkMode = !body.classList.contains('dark-mode');
    console.log("Toggle clicked, setting mode to:", isDarkMode ? "dark" : "light");
    applyDarkMode(isDarkMode);
    localStorage.setItem('darkMode', String(isDarkMode));
  });
}); 