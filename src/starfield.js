import * as THREE from 'three';
import { TIFFLoader } from 'three/addons/loaders/TIFFLoader.js';

export function applyMilkyWayBackground(scene, options = {}) {
  const { lowPerformance = false } = options;

  scene.background = new THREE.Color(0x05070f);

  const lightJpgUrl = new URL('../textures/eso0932a.jpg', import.meta.url).href;
  const textureLoader = new THREE.TextureLoader();

  const applyBackgroundTexture = (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    texture.flipY = true;
    texture.needsUpdate = true;
    scene.background = texture;
  };

  if (lowPerformance) {
    textureLoader.load(
      lightJpgUrl,
      (texture) => {
        applyBackgroundTexture(texture);
      },
      undefined,
      () => {
        scene.background = new THREE.Color(0x05070f);
      }
    );
    return;
  }

  const tifUrl = new URL('../textures/eso0932a.tif', import.meta.url).href;
  const tiffLoader = new TIFFLoader();

  tiffLoader.load(
    tifUrl,
    (texture) => {
      applyBackgroundTexture(texture);
    },
    undefined,
    (error) => {
      console.warn('Fond TIFF indisponible, fallback JPG utilisé:', error);
      textureLoader.load(
        lightJpgUrl,
        (texture) => {
          applyBackgroundTexture(texture);
        },
        undefined,
        () => {
          scene.background = new THREE.Color(0x05070f);
        }
      );
    }
  );
}
