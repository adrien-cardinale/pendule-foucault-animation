import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.position.x = 30;

const cameraFollowsEarthRotation = true;
let cameraLockedToPendulumCoordinates = true;
const cameraOffsetFromAnchor = 6;
const cameraLatitudeOffset = 2;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
const latitudeSlider = document.getElementById('latitude-slider');
const latitudeValue = document.getElementById('latitude-value');
const lockCameraCheckbox = document.getElementById('lock-camera-checkbox');
const timeDisplay = document.getElementById('time-display');

if (lockCameraCheckbox) {
  cameraLockedToPendulumCoordinates = lockCameraCheckbox.checked;
}

controls.enabled = !cameraLockedToPendulumCoordinates;

if (lockCameraCheckbox) {
  lockCameraCheckbox.addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    cameraLockedToPendulumCoordinates = isChecked;
    controls.enabled = !cameraLockedToPendulumCoordinates;
  });
}

const textureLoader = new THREE.TextureLoader();
const earthNightMapUrl = new URL('./textures/8k_earth_daymap.jpg', import.meta.url).href;
const earthNormalMapUrl = new URL('./textures/earth_normal.png', import.meta.url).href;
const earthSpecularMapUrl = new URL('./textures/earth_specular.png', import.meta.url).href;

// Fond étoilé
const starCount = 4000;
const starRadius = 250;
const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount; i += 1) {
  const radius = starRadius * (0.75 + 0.25 * Math.random());
  const theta = Math.acos(2 * Math.random() - 1);
  const phi = 2 * Math.PI * Math.random();

  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.cos(theta);
  const z = radius * Math.sin(theta) * Math.sin(phi);

  starPositions[i * 3] = x;
  starPositions[i * 3 + 1] = y;
  starPositions[i * 3 + 2] = z;
}

const starGeometry = new THREE.BufferGeometry();
starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.55,
  sizeAttenuation: true,
  transparent: true,
  opacity: 0.9,
  depthWrite: false,
});
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Terre
const earthGeometry = new THREE.SphereGeometry(8, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
  map:     textureLoader.load(earthNightMapUrl),
  normalMap: textureLoader.load(earthNormalMapUrl),
  normalScale: new THREE.Vector2(0.85, 0.85),
  specularMap: textureLoader.load(earthSpecularMapUrl),
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
const earthSpinSpeed = 0.001;
const secondsPerDay = 24 * 60 * 60;

scene.add(orbitalNormalAxis);
scene.add(earthRotationAxis);

// Lumières
const sunLight = new THREE.DirectionalLight(0xffffff, 2);
sunLight.position.set(5, 3, 5);
scene.add(sunLight);
scene.add(new THREE.AmbientLight(0x222222)); 

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
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
  depthTest: true,
});
const oscillationPlane = new THREE.Mesh(oscillationPlaneGeometry, oscillationPlaneMaterial);

const pivotGroup = new THREE.Group();
const pendulumGroup = new THREE.Group();
pendulumGroup.add(wire);
pendulumGroup.add(bob);
pivotGroup.add(pendulumGroup);
pivotGroup.add(oscillationPlane);

let latitude = 46.78;
const fixedLongitude = -6.641;

let pivotDistance = 10.1;
let latitudeRad = THREE.MathUtils.degToRad(latitude);
const longitudeRad = THREE.MathUtils.degToRad(fixedLongitude);

const surfaceNormal = new THREE.Vector3();
const surfacePointLocal = new THREE.Vector3();
const worldNormal = new THREE.Vector3();
const worldAnchor = new THREE.Vector3();
const worldDown = new THREE.Vector3();
const swingTangent = new THREE.Vector3();
const swingDirection = new THREE.Vector3();
const oscillationPlaneRight = new THREE.Vector3();
const oscillationPlaneUp = new THREE.Vector3();
const oscillationPlaneNormal = new THREE.Vector3();
const oscillationPlaneMatrix = new THREE.Matrix4();
const localNorth = new THREE.Vector3();
const localEast = new THREE.Vector3();
const inertialSwingDirection = new THREE.Vector3();
const projectedInertialDirection = new THREE.Vector3();
const fallbackReferenceAxis = new THREE.Vector3(1, 0, 0);
const localPendulumDown = new THREE.Vector3(0, -1, 0);
let angle = 0;

function setLatitude(nextLatitude) {
  latitude = nextLatitude;
  latitudeRad = THREE.MathUtils.degToRad(latitude);

  updateAnchorLocalVectors();
  resetInertialSwingDirection();

  if (latitudeValue) {
    latitudeValue.textContent = `${Math.round(latitude)}°`;
  }
}

function resetInertialSwingDirection() {
  worldAnchor.copy(surfacePointLocal);
  earth.localToWorld(worldAnchor);

  worldNormal.copy(surfaceNormal).transformDirection(earth.matrixWorld).normalize();
  localEast.crossVectors(earthRotationAxisDirection, worldNormal);
  if (localEast.lengthSq() < 1e-8) {
    localEast.crossVectors(fallbackReferenceAxis, worldNormal);
  }
  localEast.normalize();

  localNorth.crossVectors(worldNormal, localEast).normalize();
  inertialSwingDirection.copy(localNorth);
}

function updateAnchorLocalVectors() {
  const sinLat = Math.sin(latitudeRad);
  const cosLat = Math.cos(latitudeRad);
  const cosLon = Math.cos(longitudeRad);
  const sinLon = Math.sin(longitudeRad);

  surfaceNormal.set(
    sinLat * cosLon,
    cosLat,
    sinLat * sinLon
  ).normalize();

  surfacePointLocal.set(
    surfaceNormal.x * pivotDistance,
    surfaceNormal.y * pivotDistance,
    surfaceNormal.z * pivotDistance
  );
}

setLatitude(latitude);

if (latitudeSlider) {
  latitudeSlider.addEventListener('input', (event) => {
    setLatitude(Number(event.target.value));
  });
}

const worldNorthAxis = new THREE.Vector3();
const cameraLatitudeDirection = new THREE.Vector3();
const projectedNorth = new THREE.Vector3();

function updateCameraFromPendulum() {
  worldNorthAxis.copy(earthRotationAxisDirection).normalize();
  projectedNorth
    .copy(worldNorthAxis)
    .sub(worldNormal.clone().multiplyScalar(worldNorthAxis.dot(worldNormal)));

  if (projectedNorth.lengthSq() < 1e-8) {
    cameraLatitudeDirection.copy(swingTangent);
  } else {
    cameraLatitudeDirection.copy(projectedNorth).normalize();
  }

  camera.position.copy(worldAnchor)
    .addScaledVector(worldNormal, cameraOffsetFromAnchor)
    .addScaledVector(cameraLatitudeDirection, cameraLatitudeOffset);
  camera.up.set(0, 1, 0);
  camera.lookAt(worldAnchor);
  controls.target.copy(worldAnchor);
}

function updateSimulatedTimeDisplay() {
  if (!timeDisplay) {
    return;
  }

  const fullRotation = Math.PI * 2;
  const normalizedRotation = THREE.MathUtils.euclideanModulo(earth.rotation.y, fullRotation) / fullRotation;
  const totalSeconds = Math.floor(normalizedRotation * secondsPerDay);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');

  timeDisplay.textContent = `${hh}:${mm}:${ss}`;
}

function updatePivotTransform() {
  worldAnchor.copy(surfacePointLocal);
  earth.localToWorld(worldAnchor);
  pivotGroup.position.copy(worldAnchor);

  worldNormal.copy(surfaceNormal).transformDirection(earth.matrixWorld).normalize();
  worldDown.copy(worldNormal).negate();

  localEast.crossVectors(earthRotationAxisDirection, worldNormal);
  if (localEast.lengthSq() < 1e-8) {
    localEast.crossVectors(fallbackReferenceAxis, worldNormal);
  }
  localEast.normalize();

  projectedInertialDirection
    .copy(inertialSwingDirection)
    .sub(worldNormal.clone().multiplyScalar(inertialSwingDirection.dot(worldNormal)));

  if (projectedInertialDirection.lengthSq() < 1e-8) {
    swingTangent.copy(localEast);
  } else {
    swingTangent.copy(projectedInertialDirection).normalize();
  }

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
  earth.rotation.y += earthSpinSpeed;

  updateSimulatedTimeDisplay();

  if (cameraFollowsEarthRotation && !cameraLockedToPendulumCoordinates) {
    camera.position.applyAxisAngle(earthRotationAxisDirection, earthSpinSpeed);
    camera.up.applyAxisAngle(earthRotationAxisDirection, earthSpinSpeed);
  }

  angle += 0.02;
  updatePivotTransform();

  if (cameraLockedToPendulumCoordinates) {
    updateCameraFromPendulum();
  }

  if (controls.enabled) {
    controls.update();
  }
  renderer.render(scene, camera);
}
animate();