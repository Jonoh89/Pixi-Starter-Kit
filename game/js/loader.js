import { loader } from 'pixi.js';

export default {

  load(assets, finishedCallback, progressCallback) {
    if (!assets) return;

    if (Array.isArray(assets.sprites) && assets.sprites.length > 0) {
      assets.sprites.forEach((asset) => {
        const path = asset.path || asset.name;
        const pathWithExtension = path + (asset.extension ? `.${asset.extension}` : '.png');
        loader.add(asset.name, `assets/${pathWithExtension}`);
      });
    }

    if (Array.isArray(assets.spriteSheets) && assets.spriteSheets.length > 0) {
      assets.spriteSheets.forEach((asset) => {
        loader.add(asset.name, `assets/${asset.name}.json`);
      });
    }

    if (progressCallback) {
      loader.on('progress', progressCallback);
    }

    loader.load(finishedCallback);
  }

};
