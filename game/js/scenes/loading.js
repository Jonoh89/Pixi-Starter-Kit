import { Text } from 'pixi.js';
import SceneManager from '../sceneManager';
import Scene from '../scene';
import loader from '../loader';

export default class LoadingScene extends Scene {

  constructor() {
    super();
    this.progress = 0;

    const font = { font: 'bold 40px Arial', fill: '#cc00ff', align: 'center', stroke: '#FFFFFF', strokeThickness: 6 };
    this.loadingProgressText = new Text('', font);
    this.loadingProgressText.anchor.set(0.5);
    this.loadingProgressText.position.set(SceneManager.width / 2, SceneManager.height / 2);
    this.addChild(this.loadingProgressText);

    this.setProgressText();

    loader.load({
      sprites: [
        {name: 'beach', extension: 'jpg'}
      ],
      spriteSheets: [
        {name: 'ui'},
        {name: 'crab'}
      ]
    }, () => {
      this.emit('done');
    }, (loader) => {
      this.progress = loader.progress.toFixed(0);
    });
  }

  setProgressText() {
    this.loadingProgressText.text = 'Progress: ' + this.progress;
  }

  update() {
    super.update();
    this.setProgressText();
  }

}
