import * as THREE from 'three';

function main() {
  const studentSupport = document.querySelector('#ssupport');
  document.body.appendChild(studentSupport);
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  const materials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // red
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // light blue
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // yellow
    new THREE.MeshBasicMaterial({ color: 0xff00ff }), // purple
    new THREE.MeshBasicMaterial({ color: 0x00ffff }), // blue
  ];

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  let isRotating = true;

  function onClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(cube);
    if (intersects.length > 0) {
      isRotating = !isRotating;

      if (!isRotating) {
        const intersection = intersects[0];
        const normal = intersection.face.normal;

        if (normal.x === 1) {
          cube.rotation.set(0, Math.PI / 2, 0);
        } else if (normal.x === -1) {
          cube.rotation.set(0, -Math.PI / 2, 0);
        } else if (normal.y === 1) {
          cube.rotation.set(Math.PI / 2, 0, 0);
        } else if (normal.y === -1) {
          cube.rotation.set(-Math.PI / 2, 0, 0);
        } else if (normal.z === 1) {
          cube.rotation.set(0, 0, 0);
        } else if (normal.z === -1) {
          cube.rotation.set(Math.PI, 0, 0);
        }
      }
    }
  }

  window.addEventListener('click', onClick);

  function render(time) {
    time *= 0.001;
    if (isRotating) {
      cube.rotation.y = time;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
