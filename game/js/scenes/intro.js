import Pixi from 'pixi.js';
import SceneManager from './../sceneManager';
import Scene from './../scene';

export default class IntroScene extends Scene {

  constructor() {
    super();

    this.logo = Pixi.Sprite.fromImage('assets/logo.jpg');
    this.addChild(this.logo);
    this.logo.anchor.set(0.5);
    this.logo.alpha = 0;
    this.logo.position.set(SceneManager.width / 2, SceneManager.height / 2);
  }

  update() {
    if (this.logo.alpha < 1) {
      this.logo.alpha += 0.01;
    } else {
      this.emit('done');
    }
  }

}
