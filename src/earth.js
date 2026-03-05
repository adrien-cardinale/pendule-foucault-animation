import * as THREE from 'three';

export function createEarth(earthRadius = 6, options = {}) {
  const { lowPerformance = false } = options;
  const textureLoader = new THREE.TextureLoader();
  const lowDayMapUrl = new URL('../textures/8k_earth_daymap.jpg', import.meta.url).href;
  const highDayMapUrl = new URL('../textures/earth_daymap.jpg', import.meta.url).href;
  const normalMapUrl = new URL('../textures/earth_normal.png', import.meta.url).href;

  const dayMap = textureLoader.load(lowDayMapUrl);
  dayMap.colorSpace = THREE.SRGBColorSpace;
  dayMap.minFilter = THREE.LinearMipmapLinearFilter;
  dayMap.magFilter = THREE.LinearFilter;

  const material = new THREE.MeshPhongMaterial({
    map: dayMap,
    shininess: 25,
  });

  if (!lowPerformance) {
    textureLoader.load(highDayMapUrl, (highDayMap) => {
      highDayMap.colorSpace = THREE.SRGBColorSpace;
      highDayMap.minFilter = THREE.LinearMipmapLinearFilter;
      highDayMap.magFilter = THREE.LinearFilter;
      material.map = highDayMap;
      material.needsUpdate = true;
    });

    textureLoader.load(normalMapUrl, (normalMap) => {
      material.normalMap = normalMap;
      material.normalScale = new THREE.Vector2(0.85, 0.85);
      material.needsUpdate = true;
    });
  }

  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(earthRadius, 64, 64),
    material
  );

  const northPoleMarker = new THREE.Mesh(
    new THREE.SphereGeometry(0.02, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xff5555 })
  );
  northPoleMarker.position.set(0, earthRadius, 0);

  return { earth, northPoleMarker, earthRadius };
}
