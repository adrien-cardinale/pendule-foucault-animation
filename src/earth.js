import * as THREE from 'three';

export function createEarth(earthRadius = 6) {
  const textureLoader = new THREE.TextureLoader();
  const dayMapUrl = new URL('../textures/earth_daymap.jpg', import.meta.url).href;
  const normalMapUrl = new URL('../textures/earth_normal.png', import.meta.url).href;

  const dayMap = textureLoader.load(dayMapUrl);
  dayMap.colorSpace = THREE.SRGBColorSpace;
  const normalMap = textureLoader.load(normalMapUrl);

  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(earthRadius, 64, 64),
    new THREE.MeshPhongMaterial({
      map: dayMap,
      normalMap,
      normalScale: new THREE.Vector2(0.85, 0.85),
      shininess: 25,
    })
  );

  const northPoleMarker = new THREE.Mesh(
    new THREE.SphereGeometry(0.02, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xff5555 })
  );
  northPoleMarker.position.set(0, earthRadius, 0);

  return { earth, northPoleMarker, earthRadius };
}
