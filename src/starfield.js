import * as THREE from 'three';
import { TIFFLoader } from 'three/addons/loaders/TIFFLoader.js';

export function applyMilkyWayBackground(scene) {
  const tifUrl = new URL('../textures/eso0932a.tif', import.meta.url).href;
  const tiffLoader = new TIFFLoader();

  scene.background = new THREE.Color(0x05070f);

  tiffLoader.load(
    tifUrl,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      texture.flipY = true;
      texture.needsUpdate = true;
      scene.background = texture;
    },
    undefined,
    (error) => {
      console.error('Impossible de charger la texture de fond TIFF:', error);
      scene.background = new THREE.Color(0x05070f);
    }
  );
}
