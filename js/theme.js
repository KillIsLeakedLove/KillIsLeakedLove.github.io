// Theme management
let currentTheme = localStorage.getItem('theme') || 'system';

// Get system theme
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Apply theme
function applyTheme(theme) {
  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
  document.documentElement.setAttribute('data-theme', resolvedTheme);
  
  // Update theme icon
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    if (resolvedTheme === 'dark') {
      themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    } else {
      themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
    }
  }
}

// Set theme
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  applyTheme(theme);
}

// Initialize theme
applyTheme(currentTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (currentTheme === 'system') {
    applyTheme('system');
  }
});
