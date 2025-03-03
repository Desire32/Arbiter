function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
  }
  function goBack() {
    document.getElementById('description-popup').style.display = 'none';
  }
  function proceed() {
    alert('Proceeding with the selected option!');
    document.getElementById('description-popup').style.display = 'none';
  }

  function switchScene(sceneId) {
    const scenes = ['scene-gps-text', 'scene-marker', 'scene-map'];
    scenes.forEach((id) => {
      const scene = document.getElementById(id);
      if (scene) scene.style.display = 'none';
    });
    const scene = document.getElementById(sceneId);
    if (scene) scene.style.display = 'block';
  }

