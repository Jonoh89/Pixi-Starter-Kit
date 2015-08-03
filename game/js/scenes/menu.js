import Pixi from 'pixi.js';
import SceneManager from './../sceneManager';
import Scene from './../scene';

export default class Menu extends Scene {

  constructor() {
    super();
    const ui = Pixi.loader.resources.ui.textures;
    const button = new Pixi.Sprite(ui.play);
    button.anchor.set(0.5);
    button.position.x = SceneManager.width / 2;
    button.position.y = SceneManager.height / 2;
    button.interactive = true;
    button
      .on('mousedown', this.goToGame)
      .on('touchstart', this.goToGame);

    this.addChild(button);

    this.interactive = true;
  }

  goToGame() {
    SceneManager.goToScene('game');
  }

}
