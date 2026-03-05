import * as THREE from 'three';

export function animateScene({
  clock,
  earth,
  pendulumPivot,
  maxAngle,
  oscillationSpeed,
  earthSpinSpeed,
  shouldLockCamera,
  shouldFollowEarthRotation,
  onLockedCameraUpdate,
  onFrame,
  controls,
  renderer,
  scene,
  camera,
}) {
  const rotationAxis = new THREE.Vector3(0, 1, 0);

  function animate() {
    requestAnimationFrame(animate);

    const t = clock.getElapsedTime();

    earth.rotation.y += earthSpinSpeed;

    if (onFrame) {
      onFrame(t);
    }

    pendulumPivot.rotation.z = Math.sin(t * oscillationSpeed) * maxAngle;

    const lockCamera = shouldLockCamera?.();
    if (shouldFollowEarthRotation?.() && !lockCamera) {
      camera.position.applyAxisAngle(rotationAxis, earthSpinSpeed);
      camera.up.applyAxisAngle(rotationAxis, earthSpinSpeed);
      controls.target.applyAxisAngle(rotationAxis, earthSpinSpeed);
      camera.lookAt(controls.target);
    }

    if (lockCamera) {
      if (onLockedCameraUpdate) {
        onLockedCameraUpdate();
      } else {
        camera.position.applyAxisAngle(rotationAxis, earthSpinSpeed);
        camera.up.applyAxisAngle(rotationAxis, earthSpinSpeed);
        camera.lookAt(0, 0, 0);
      }
    }

    if (controls.enabled) {
      controls.update();
    }
    renderer.render(scene, camera);
  }

  animate();
}
