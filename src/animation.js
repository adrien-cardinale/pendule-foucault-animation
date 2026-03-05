export function animateScene({
  clock,
  earth,
  pendulumPivot,
  maxAngle,
  oscillationSpeed,
  onFrame,
  controls,
  renderer,
  scene,
  camera,
}) {
  function animate() {
    requestAnimationFrame(animate);

    const t = clock.getElapsedTime();

    if (onFrame) {
      onFrame(t);
    }

    pendulumPivot.rotation.z = Math.sin(t * oscillationSpeed) * maxAngle;

    earth.rotation.y += 0.0015;
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}
