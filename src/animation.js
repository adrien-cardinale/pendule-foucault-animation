export function animateScene({
  clock,
  earth,
  pendulumPivot,
  maxAngle,
  oscillationSpeed,
  earthSpinSpeed,
  shouldLockCamera,
  onFrame,
  controls,
  renderer,
  scene,
  camera,
}) {
  const rotationAxis = { x: 0, y: 1, z: 0 };

  function animate() {
    requestAnimationFrame(animate);

    const t = clock.getElapsedTime();

    if (onFrame) {
      onFrame(t);
    }

    pendulumPivot.rotation.z = Math.sin(t * oscillationSpeed) * maxAngle;

    earth.rotation.y += earthSpinSpeed;

    if (shouldLockCamera?.()) {
      camera.position.applyAxisAngle(rotationAxis, earthSpinSpeed);
      camera.up.applyAxisAngle(rotationAxis, earthSpinSpeed);
      camera.lookAt(0, 0, 0);
    }

    if (controls.enabled) {
      controls.update();
    }
    renderer.render(scene, camera);
  }

  animate();
}
