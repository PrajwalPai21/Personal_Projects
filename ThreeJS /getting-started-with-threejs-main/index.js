import * as THREE from "three";

import { OrbitControls } from "jsm/controls/OrbitControls.js";
// renderer , camera , scene object = a scene
const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);

const fov = 75; //75 degrees , 0 is too narrow , 90 is too wide
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.01;

// 2 = increse the mesh squares or somethin
const shape = new THREE.IcosahedronGeometry(1.0, 3);
//MeshBasicMaterial doesnt interact with lights so use standard materoal
const mat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  flatShading: true,
});

const mesh = new THREE.Mesh(shape, mat);
scene.add(mesh);
const wireMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
});

const wireMesh = new THREE.Mesh(shape, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh); // doing scene.add would not make the mesh move when animated
//hence make the wiremesh child of the mesh

// liighting top and bottom
const hemilight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemilight);
// a simple animation of a iccosahedron that scales
function animate(t = 0) {
  console.log(t);
  requestAnimationFrame(animate);
  // mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
  mesh.rotation.x = t * 0.0001;
  renderer.render(scene, camera);
  controls.update(); // this is for a smooth movement when you hold and let go
}
animate();
