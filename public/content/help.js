function toggleHelpMenu() {
    const helpContainer = document.getElementById('help-container');
    helpContainer.style.display = (helpContainer.style.display === 'block') ? 'none' : 'block';
  }

  function closeHelpMenu() {
    const helpContainer = document.getElementById('help-container');
    helpContainer.style.display = 'none';
}
