function openPopup(location) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
  
    switch (location) {
      case 'building1':
        popupTitle.innerText = 'Building 1';
        popupDescription.innerText = 'This is the first building of the university.';
        break;
      case 'library':
        popupTitle.innerText = 'Library';
        popupDescription.innerText = 'The university library with all the books you need.';
        break;
      case 'cafeteria':
        popupTitle.innerText = 'Cafeteria';
        popupDescription.innerText = 'This is the cafeteria, where you can grab a bite!';
        break;
      case 'gym':
        popupTitle.innerText = 'Gym';
        popupDescription.innerText = 'A well-equipped gym for physical activities.';
        break;
      case 'office':
        popupTitle.innerText = 'Office';
        popupDescription.innerText = 'The administration office for any queries.';
        break;
      case 'lecture-hall':
        popupTitle.innerText = 'Lecture Hall';
        popupDescription.innerText = 'A place for your lectures and classes.';
        break;
      case 'lab':
        popupTitle.innerText = 'Lab';
        popupDescription.innerText = 'The science and computer labs for experiments.';
        break;
      case 'conference-room':
        popupTitle.innerText = 'Conference Room';
        popupDescription.innerText = 'The conference room for events and meetings.';
        break;
      case 'study-area':
        popupTitle.innerText = 'Study Area';
        popupDescription.innerText = 'A quiet area to study and focus.';
        break;
      case 'toilets':
        popupTitle.innerText = 'Toilets';
        popupDescription.innerText = 'The public restrooms are located here.';
        break;
      default:
        popupTitle.innerText = 'Unknown Location';
        popupDescription.innerText = 'No information available for this location.';
    }
  
    popup.style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  function showFloor(floor) {
    const firstFloor = document.querySelector('.first-floor-container');
    const secondFloor = document.querySelector('.second-floor-container');
    
    if (floor === 1) {
      firstFloor.style.display = 'block';
      secondFloor.style.display = 'none';
    } else if (floor === 2) {
      firstFloor.style.display = 'none';
      secondFloor.style.display = 'block';
    }
  }

function toggleMap() {
    const mapContainer = document.getElementById('map-container');
    if (mapContainer.style.display === 'none' || mapContainer.style.display === '') {
      mapContainer.style.display = 'block';
    } else {
      mapContainer.style.display = 'none'; 
    }
  }

  function closeMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.style.display = 'none'; 
  }
  
  