import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2.5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const textureLoader = new THREE.TextureLoader();

const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
  map:     textureLoader.load('textures/8k_earth_nightmap.jpg'),
  normalMap: textureLoader.load('textures/earth_normal.png'),
  normalScale: new THREE.Vector2(0.85, 0.85),
  specularMap: textureLoader.load('textures/earth_specular.png'),
  specular: new THREE.Color(0x333333),
});

const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// Lumières
const sunLight = new THREE.DirectionalLight(0xffffff, 2);
sunLight.position.set(5, 3, 5);
scene.add(sunLight);
scene.add(new THREE.AmbientLight(0x222222)); 

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

// const atmGeo = new THREE.SphereGeometry(1.08, 64, 64);
// const atmMat = new THREE.MeshPhongMaterial({
//   color: 0x4488ff,
//   transparent: true,
//   opacity: 0.08,
//   side: THREE.FrontSide,
// });
// scene.add(new THREE.Mesh(atmGeo, atmMat));


// Pendule
const penduleGeometry = new THREE.SphereGeometry(0.05, 32, 32);
const penduleMaterial = new THREE.MeshStandardMaterial({
  color: 0x888888,       // gris moyen
  metalness: 1.0,        // 0 = plastique, 1 = métal pur
  roughness: 0.3,        // 0 = miroir, 1 = totalement mat
});
const penduleMesh = new THREE.Mesh(penduleGeometry, penduleMaterial);
penduleMesh.position.set(1.2, 0, 0); // Position initiale du pendule
scene.add(penduleMesh);

function animate() {
  requestAnimationFrame(animate);
  earthMesh.rotation.y += 0.001;   // rotation lente de la Terre
  controls.update();
  renderer.render(scene, camera);
}
animate();