import * as THREE from 'three';
import { createSceneContext, attachResize } from './src/setupScene.js';
import { createEarth } from './src/earth.js';
import { createPendulum } from './src/pendulum.js';
import { animateScene } from './src/animation.js';
import { applyMilkyWayBackground } from './src/starfield.js';

const { scene, camera, renderer, controls } = createSceneContext();
applyMilkyWayBackground(scene);

const { earth, northPoleMarker, earthRadius } = createEarth(6);
scene.add(earth);
scene.add(northPoleMarker);

const latitudeSlider = document.getElementById('latitude-slider');
const latitudeValue = document.getElementById('latitude-value');
const longitudeSlider = document.getElementById('longitude-slider');
const longitudeValue = document.getElementById('longitude-value');
const lockCameraRotationCheckbox = document.getElementById('lock-camera-rotation');

const pendulumLength = 3;
const anchorOffsetAboveSurface = pendulumLength + 0.4;
const { pendulumRoot, pendulumPivot } = createPendulum(0, pendulumLength);
scene.add(pendulumRoot);

const clock = new THREE.Clock();
const maxAngle = THREE.MathUtils.degToRad(14);
const oscillationSpeed = 1.4;
const earthSpinSpeed = 0.0015;

let lockCameraToEarthRotation = Boolean(lockCameraRotationCheckbox?.checked);

let latitude = Number(latitudeSlider?.value ?? 47);
let longitude = Number(longitudeSlider?.value ?? 0);

const yAxis = new THREE.Vector3(0, 1, 0);
const fallbackAxis = new THREE.Vector3(0, 0, 1);
const fixedWorldReference = new THREE.Vector3(1, 0, 0);
const localNormal = new THREE.Vector3();
const worldNormal = new THREE.Vector3();
const worldTangent = new THREE.Vector3();
const worldBinormal = new THREE.Vector3();
const basisMatrix = new THREE.Matrix4();

function updateControlLabels() {
  if (latitudeValue) {
    latitudeValue.textContent = `${Math.round(latitude)}°`;
  }

  if (longitudeValue) {
    longitudeValue.textContent = `${Math.round(longitude)}°`;
  }
}

if (latitudeSlider) {
  latitudeSlider.addEventListener('input', (event) => {
    latitude = Number(event.target.value);
    updateControlLabels();
  });
}

if (longitudeSlider) {
  longitudeSlider.addEventListener('input', (event) => {
    longitude = Number(event.target.value);
    updateControlLabels();
  });
}

if (lockCameraRotationCheckbox) {
  lockCameraRotationCheckbox.addEventListener('change', (event) => {
    lockCameraToEarthRotation = event.target.checked;
    controls.enabled = !lockCameraToEarthRotation;
  });
}

controls.enabled = !lockCameraToEarthRotation;

updateControlLabels();

function updatePendulumPlacement() {
  const latitudeRad = THREE.MathUtils.degToRad(latitude);
  const longitudeRad = THREE.MathUtils.degToRad(longitude);
  const cosLat = Math.cos(latitudeRad);

  localNormal.set(
    cosLat * Math.cos(longitudeRad),
    Math.sin(latitudeRad),
    cosLat * Math.sin(longitudeRad)
  );

  worldNormal.copy(localNormal).applyAxisAngle(yAxis, earth.rotation.y).normalize();

  const anchorDistance = earthRadius + anchorOffsetAboveSurface;
  pendulumRoot.position.copy(worldNormal).multiplyScalar(anchorDistance);

  worldTangent.copy(fixedWorldReference).addScaledVector(worldNormal, -fixedWorldReference.dot(worldNormal));
  if (worldTangent.lengthSq() < 1e-8) {
    worldTangent.copy(fallbackAxis).addScaledVector(worldNormal, -fallbackAxis.dot(worldNormal));
  }
  worldTangent.normalize();

  worldBinormal.crossVectors(worldTangent, worldNormal).normalize();
  basisMatrix.makeBasis(worldTangent, worldNormal, worldBinormal);
  pendulumRoot.quaternion.setFromRotationMatrix(basisMatrix);

  northPoleMarker.position.copy(worldNormal).multiplyScalar(earthRadius);
}

attachResize(camera, renderer);

animateScene({
  clock,
  earth,
  pendulumPivot,
  maxAngle,
  oscillationSpeed,
  earthSpinSpeed,
  shouldLockCamera: () => lockCameraToEarthRotation,
  onFrame: updatePendulumPlacement,
  controls,
  renderer,
  scene,
  camera,
});
