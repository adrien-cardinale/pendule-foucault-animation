import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.position.x = 30;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const textureLoader = new THREE.TextureLoader();

// Terre
const earthGeometry = new THREE.SphereGeometry(8, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
  map:     textureLoader.load('textures/8k_earth_nightmap.jpg'),
  normalMap: textureLoader.load('textures/earth_normal.png'),
  normalScale: new THREE.Vector2(0.85, 0.85),
  specularMap: textureLoader.load('textures/earth_specular.png'),
  specular: new THREE.Color(0x333333),
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
const earthGroup = new THREE.Group();
const earthTilt = THREE.MathUtils.degToRad(23.5);

// Inclinaison de la Terre
earthGroup.rotation.z = earthTilt;
earthGroup.add(earth);
scene.add(earthGroup);

const axisLength = 26;

function createDashedAxisLine(direction, color) {
  const normalizedDirection = direction.clone().normalize();
  const halfLength = axisLength / 2;
  const points = [
    normalizedDirection.clone().multiplyScalar(-halfLength),
    normalizedDirection.clone().multiplyScalar(halfLength),
  ];

  const axisGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const axisMaterial = new THREE.LineDashedMaterial({
    color,
    dashSize: 0.5,
    gapSize: 0.25,
  });

  const axisLine = new THREE.Line(axisGeometry, axisMaterial);
  axisLine.computeLineDistances();
  return axisLine;
}

const orbitalNormalAxis = createDashedAxisLine(new THREE.Vector3(0, 1, 0), 0x00ff00);
const earthRotationAxisDirection = new THREE.Vector3(0, 1, 0).applyAxisAngle(new THREE.Vector3(0, 0, 1), earthTilt);
const earthRotationAxis = createDashedAxisLine(earthRotationAxisDirection, 0xff0000);

scene.add(orbitalNormalAxis);
scene.add(earthRotationAxis);

// Lumières
const sunLight = new THREE.DirectionalLight(0xffffff, 2);
sunLight.position.set(5, 3, 5);
scene.add(sunLight);
scene.add(new THREE.AmbientLight(0x222222)); 

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);


// Pendule
const wireGeometry = new THREE.CylinderGeometry(0.008, 0.008, 2, 8);
const wireMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 1.0, roughness: 0.3 });
const wire = new THREE.Mesh(wireGeometry, wireMaterial);
wire.position.y = -1;

const bobGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const bobMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 1.0, roughness: 0.3 });
const bob = new THREE.Mesh(bobGeometry, bobMaterial);
bob.position.y = -2;

const oscillationPlaneGeometry = new THREE.PlaneGeometry(1.6, 5);
const oscillationPlaneMaterial = new THREE.MeshBasicMaterial({
  color: 0xffccff,
  transparent: true,
  opacity: 0.2,
  side: THREE.DoubleSide,
  depthWrite: false,
});
const oscillationPlane = new THREE.Mesh(oscillationPlaneGeometry, oscillationPlaneMaterial);

const pivotGroup = new THREE.Group();
const pendulumGroup = new THREE.Group();
pendulumGroup.add(wire);
pendulumGroup.add(bob);
pivotGroup.add(pendulumGroup);
pivotGroup.add(oscillationPlane);

let latitude = 45;

let pivotDistance = 10.1;
let pivotPosition = THREE.MathUtils.degToRad(latitude);

const surfaceNormal = new THREE.Vector3();
const surfacePointLocal = new THREE.Vector3(
  Math.sin(pivotPosition) * pivotDistance,
  Math.cos(pivotPosition) * pivotDistance,
  0
);
const worldNormal = new THREE.Vector3();
const worldAnchor = new THREE.Vector3();
const worldDown = new THREE.Vector3();
const swingTangent = new THREE.Vector3();
const projectedReference = new THREE.Vector3();
const swingDirection = new THREE.Vector3();
const oscillationPlaneRight = new THREE.Vector3();
const oscillationPlaneUp = new THREE.Vector3();
const oscillationPlaneNormal = new THREE.Vector3();
const oscillationPlaneMatrix = new THREE.Matrix4();
const fixedReferenceAxis = new THREE.Vector3(1, 0, 0);
const fallbackReferenceAxis = new THREE.Vector3(0, 0, 1);
const localPendulumDown = new THREE.Vector3(0, -1, 0);
let angle = 0;

function updatePivotTransform() {
  surfaceNormal.set(
    Math.sin(pivotPosition),
    Math.cos(pivotPosition),
    0
  ).normalize();

  worldAnchor.copy(surfacePointLocal);
  earth.localToWorld(worldAnchor);
  pivotGroup.position.copy(worldAnchor);

  worldNormal.copy(surfaceNormal).transformDirection(earth.matrixWorld).normalize();
  worldDown.copy(worldNormal).negate();

  projectedReference.copy(fixedReferenceAxis)
    .sub(worldNormal.clone().multiplyScalar(fixedReferenceAxis.dot(worldNormal)));

  if (projectedReference.lengthSq() < 1e-8) {
    projectedReference.copy(fallbackReferenceAxis)
      .sub(worldNormal.clone().multiplyScalar(fallbackReferenceAxis.dot(worldNormal)));
  }

  swingTangent.copy(projectedReference).normalize();

  const currentAngle = Math.sin(angle) * 0.3;
  swingDirection
    .copy(worldDown)
    .multiplyScalar(Math.cos(currentAngle))
    .add(swingTangent.clone().multiplyScalar(Math.sin(currentAngle)))
    .normalize();

  pendulumGroup.quaternion.setFromUnitVectors(localPendulumDown, swingDirection);

  oscillationPlaneRight.copy(swingTangent).normalize();
  oscillationPlaneUp.copy(worldNormal).normalize();
  oscillationPlaneNormal.crossVectors(oscillationPlaneRight, oscillationPlaneUp).normalize();
  oscillationPlaneMatrix.makeBasis(oscillationPlaneRight, oscillationPlaneUp, oscillationPlaneNormal);
  oscillationPlane.quaternion.setFromRotationMatrix(oscillationPlaneMatrix);
  oscillationPlane.position.copy(worldDown).multiplyScalar(2.5);
}

updatePivotTransform();
scene.add(pivotGroup);

function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.001;

  angle += 0.02;
  updatePivotTransform();

  controls.update();
  renderer.render(scene, camera);
}
animate();