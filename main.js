import * as THREE from 'three';
import { createSceneContext, attachResize } from './src/setupScene.js';
import { createEarth } from './src/earth.js';
import { createNorthPolePendulum } from './src/pendulum.js';
import { animateScene } from './src/animation.js';

const { scene, camera, renderer, controls } = createSceneContext();

const { earth, northPoleMarker, earthRadius } = createEarth(6);
scene.add(earth);
// scene.add(northPoleMarker);

const pendulumLength = 3;
const anchorOffsetAboveSurface = pendulumLength + 0.4;
const anchorY = earthRadius + anchorOffsetAboveSurface;
const { pendulumPivot } = createNorthPolePendulum(anchorY, pendulumLength);
scene.add(pendulumPivot);

const clock = new THREE.Clock();
const maxAngle = THREE.MathUtils.degToRad(14);
const oscillationSpeed = 1.4;

attachResize(camera, renderer);

animateScene({
  clock,
  earth,
  pendulumPivot,
  maxAngle,
  oscillationSpeed,
  controls,
  renderer,
  scene,
  camera,
});
