/**
 * Script de gestion du mode sombre
 * Permet de basculer entre le mode clair et sombre
 * et sauvegarde la préférence de l'utilisateur
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log("Dark mode script loaded");
  
  // First check if the toggle exists
  let darkModeToggle = document.getElementById('dark-mode-toggle');
  
  // If it doesn't exist, create it
  if (!darkModeToggle) {
    console.log("Dark mode toggle not found, creating it dynamically");
    darkModeToggle = createDarkModeToggle();
  }
  
  const body = document.body;
  
  // Ensure the icon exists
  ensureIconExists(darkModeToggle);
  
  initializeDarkMode(body, darkModeToggle);
});

/**
 * Creates the dark mode toggle button
 * @returns {HTMLElement} The created button
 */
function createDarkModeToggle() {
  const toggle = document.createElement('button');
  toggle.id = 'dark-mode-toggle';
  toggle.className = 'dark-mode-toggle';
  toggle.setAttribute('aria-label', 'Toggle Dark Mode');
  
  // Create the moon icon (always use moon)
  const icon = document.createElement('i');
  icon.className = 'fa fa-moon-o';
  icon.setAttribute('aria-hidden', 'true');
  
  // Append the icon to the button
  toggle.appendChild(icon);
  
  // Insert the toggle after the header
  const header = document.querySelector('.site-header');
  if (header?.parentNode) {
    header.parentNode.insertBefore(toggle, header.nextSibling);
  } else {
    // Fallback - insert at the beginning of the body
    document.body.insertBefore(toggle, document.body.firstChild);
  }
  
  return toggle;
}

/**
 * Ensures the icon exists within the toggle
 * @param {HTMLElement} darkModeToggle The dark mode toggle button
 */
function ensureIconExists(darkModeToggle) {
  const icon = darkModeToggle.querySelector('i');
  
  // If icon is not found, create it
  if (!icon) {
    const newIcon = document.createElement('i');
    newIcon.className = 'fa fa-moon-o'; // Always use moon icon
    newIcon.setAttribute('aria-hidden', 'true');
    darkModeToggle.appendChild(newIcon);
  } else {
    // Make sure it's the moon icon
    icon.className = 'fa fa-moon-o';
  }
}

/**
 * Initializes the dark mode functionality
 * @param {HTMLElement} body The document body
 * @param {HTMLElement} darkModeToggle The dark mode toggle button
 */
function initializeDarkMode(body, darkModeToggle) {
  // Start in light mode by default
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
  }
  
  // Détection initiale du mode système
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const systemPrefersDark = darkModeMediaQuery.matches;
  console.log("System preference:", systemPrefersDark ? "dark" : "light");
  
  // Vérifier si l'utilisateur a une préférence enregistrée
  const userPreference = localStorage.getItem('darkMode');
  console.log("User preference:", userPreference);
  
  // Apply the appropriate mode
  applyStoredPreferences(body, darkModeToggle, userPreference, systemPrefersDark);
  
  // Set up system preference change listener
  setupMediaQueryListeners(darkModeMediaQuery, body, darkModeToggle);
  
  // Set up click handler
  setupClickHandler(body, darkModeToggle);
  
  // Ensure toggle is visible
  applyVisibilityStyles(darkModeToggle, body);
}

/**
 * Applies stored user preferences for dark mode
 * @param {HTMLElement} body The document body
 * @param {HTMLElement} darkModeToggle The dark mode toggle button
 * @param {string|null} userPreference The stored user preference
 * @param {boolean} systemPrefersDark Whether the system prefers dark mode
 */
function applyStoredPreferences(body, darkModeToggle, userPreference, systemPrefersDark) {
  if (userPreference === 'true') {
    console.log("Using user preference: dark mode");
    applyDarkMode(body, darkModeToggle, true);
  } else if (userPreference === 'false') {
    console.log("Using user preference: light mode");
    applyDarkMode(body, darkModeToggle, false);
  } else {
    console.log("No user preference, using system preference");
    applyDarkMode(body, darkModeToggle, systemPrefersDark);
  }
}

/**
 * Sets up media query listeners for system preference changes
 * @param {MediaQueryList} darkModeMediaQuery The media query for dark mode preference
 * @param {HTMLElement} body The document body
 * @param {HTMLElement} darkModeToggle The dark mode toggle button
 */
function setupMediaQueryListeners(darkModeMediaQuery, body, darkModeToggle) {
  try {
    // Using the modern addEventListener instead of deprecated addListener
    darkModeMediaQuery.addEventListener('change', (e) => {
      const newIsDark = e.matches;
      console.log("System preference changed to:", newIsDark ? "dark" : "light");
      // Apply only if user hasn't set a preference
      if (localStorage.getItem('darkMode') === null) {
        applyDarkMode(body, darkModeToggle, newIsDark);
      }
    });
  } catch (error) {
    console.log("Error with media query listener:", error);
    // Fallback
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const newIsDark = e.matches;
        if (localStorage.getItem('darkMode') === null) {
          applyDarkMode(body, darkModeToggle, newIsDark);
        }
      });
    } catch (fallbackError) {
      console.log("Fallback also failed:", fallbackError);
    }
  }
}

/**
 * Sets up the click handler for the dark mode toggle
 * @param {HTMLElement} body The document body
 * @param {HTMLElement} darkModeToggle The dark mode toggle button
 */
function setupClickHandler(body, darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    const isDarkMode = !body.classList.contains('dark-mode');
    console.log("Toggle clicked, setting mode to:", isDarkMode ? "dark" : "light");
    applyDarkMode(body, darkModeToggle, isDarkMode);
    localStorage.setItem('darkMode', String(isDarkMode));
  });
}

/**
 * Applies the dark or light mode
 * @param {HTMLElement} body The document body
 * @param {HTMLElement} darkModeToggle The dark mode toggle button
 * @param {boolean} isDark Whether to apply dark mode
 */
function applyDarkMode(body, darkModeToggle, isDark) {
  console.log("Applying mode:", isDark ? "dark" : "light");
  
  if (isDark) {
    body.classList.add('dark-mode');
    darkModeToggle.style.color = '#ffffff'; // Ensure button is white in dark mode
  } else {
    body.classList.remove('dark-mode');
    darkModeToggle.style.color = '#000000'; // Black in light mode
  }
  
  // Always keep the moon icon, but update its color based on the mode
  updateMoonIcon(darkModeToggle, isDark);
}

/**
 * Updates the moon icon color based on the mode
 * @param {HTMLElement} darkModeToggle The dark mode toggle button
 * @param {boolean} isDark Whether dark mode is active
 */
function updateMoonIcon(darkModeToggle, isDark) {
  const currentIcon = darkModeToggle.querySelector('i');
  if (currentIcon) {
    // Ensure it's always the moon icon
    if (!currentIcon.classList.contains('fa-moon-o')) {
      currentIcon.className = 'fa fa-moon-o';
    }
    
    // Just update the color based on the mode
    if (isDark) {
      // White moon in dark mode
      currentIcon.style.color = '#ffffff';
      currentIcon.style.textShadow = '0 0 5px rgba(0,0,0,0.5)';
    } else {
      // Black moon in light mode
      currentIcon.style.color = '#000000';
      currentIcon.style.textShadow = 'none';
    }
  }
}

/**
 * Applies visibility styles to the dark mode toggle
 * @param {HTMLElement} darkModeToggle The dark mode toggle button
 * @param {HTMLElement} body The document body
 */
function applyVisibilityStyles(darkModeToggle, body) {
  darkModeToggle.style.display = 'block';
  darkModeToggle.style.visibility = 'visible';
  darkModeToggle.style.opacity = '1';
  darkModeToggle.style.position = 'absolute';
  darkModeToggle.style.top = '25px';
  darkModeToggle.style.right = '25px';
  darkModeToggle.style.zIndex = '100';
  // Apply color based on current mode
  darkModeToggle.style.color = body.classList.contains('dark-mode') ? '#ffffff' : '#000000';
  darkModeToggle.style.fontSize = '1.5rem';
  darkModeToggle.style.backgroundColor = 'transparent';
  darkModeToggle.style.border = 'none';
  darkModeToggle.style.cursor = 'pointer';
  
  // Add some extra visibility for the icon
  const icon = darkModeToggle.querySelector('i');
  if (icon) {
    // Ensure it's the moon icon
    icon.className = 'fa fa-moon-o';
    
    icon.style.display = 'inline-block';
    icon.style.visibility = 'visible';
    icon.style.opacity = '1';
    icon.style.color = body.classList.contains('dark-mode') ? '#ffffff' : '#000000';
  }
} 