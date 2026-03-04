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


// Pendule
const wireGeometry = new THREE.CylinderGeometry(0.005, 0.005, 0.5, 8);
const wireMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 1.0, roughness: 0.3 });
const wire = new THREE.Mesh(wireGeometry, wireMaterial);
wire.position.y = -1;

const bobGeometry = new THREE.SphereGeometry(0.08, 32, 32);
const bobMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 1.0, roughness: 0.3 });
const bob = new THREE.Mesh(bobGeometry, bobMaterial);
bob.position.y = -1.25;

const pivotGroup = new THREE.Group();
pivotGroup.add(wire);
pivotGroup.add(bob);
pivotGroup.position.y = 2.25;
pivotGroup.position.x = 0;
scene.add(pivotGroup);

let angle = 0;

function animate() {
  requestAnimationFrame(animate);
  earthMesh.rotation.y += 0.001;

  angle += 0.02;
  pivotGroup.rotation.x = Math.sin(angle) * 0.3;

  controls.update();
  renderer.render(scene, camera);
}
animate();