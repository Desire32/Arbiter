// cube
const rotatingBox = document.querySelector('#rotating-box');
const animation = document.querySelector('#box-rotation');

let rotationY = 0;

function stopRotation(event) {
animation.parentNode.removeChild(animation); 
const clickedFace = event.target;
const rotation = clickedFace.getAttribute('rotation');
rotatingBox.setAttribute('rotation', `0 ${rotation.y} 0`);
rotationY = rotation.y;
}
const clickableFaces = document.querySelectorAll('.clickable');
clickableFaces.forEach(face => {
face.addEventListener('click', stopRotation);
});
function handleSwipe(event) {
  const swipeDirection = event.detail.direction;

  if (swipeDirection === 'left') {
    rotationY += 90;
  } else if (swipeDirection === 'right') {
    rotationY -= 90; 
  }
  rotatingBox.setAttribute('rotation', { x: 0, y: rotationY, z: 0 });
}
AFRAME.registerComponent('swipe-listener', {
  init: function() {
    this.el.addEventListener('swipe', handleSwipe);
  }
});
const marker = document.querySelector('#marker1');
marker.setAttribute('swipe-listener', '');