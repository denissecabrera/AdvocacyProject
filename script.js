document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Load saved mode from localStorage
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save mode to localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.removeItem('dark-mode');
    }
  });
});