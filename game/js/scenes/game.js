import Pixi from 'pixi.js';
import SceneManager from '../sceneManager';
import Scene from './../scene';
import TweenMax from 'gsap';
import Howler from 'howler';

const resources = Pixi.loader.resources;

export default class GameScene extends Scene {

  constructor() {
    super();

    this.backgroundMusic = new Howler.Howl({
      urls: ['assets/sounds/beach.mp3'],
      autoplay: false,
      loop: true
    });

    const background = new Pixi.Sprite(resources.beach.texture);
    this.addChild(background);

    this._setupCrab();
    this._setupBackButton();
    this._setupPlayButton();
    this._setupPauseButton();

    this.interactive = true;
  }

  _setupCrab() {
    const frames = Object.keys(resources.crab.textures).map(key => resources.crab.textures[key]);
    const crab = new Pixi.extras.MovieClip(frames);
    crab.anchor.set(0.5);
    crab.position.set(100, 800);
    crab.animationSpeed = 0.5;
    crab.play();
    this.addChild(crab);
    this.crab = crab;

    this.tween = TweenMax.to(crab.position, 6, {x: 1180, yoyo: true, paused: true, ease: 'Linear.easeNone'})
      .repeat(-1);
  }

  _createGameButton(x, y, textureKey, scale, onClick) {
    const button = new Pixi.Sprite(resources.ui.textures[textureKey]);
    button.position.set(x, y);
    button.scale.set(scale);
    button.click = button.tap =  onClick;

    button.interactive = true;
    this.addChild(button);
  }

  _setupBackButton() {
    this._createGameButton(100, 50, 'back', 0.5, () => {
      SceneManager.goToScene('menu');
    });
  }

  _setupPlayButton() {
    this._createGameButton(SceneManager.width - 100, 50, 'play', 0.25, () => {
      if (this.isPaused()) {
        this.resume();
      }
    });
  }

  _setupPauseButton() {
    this._createGameButton(SceneManager.width - 200, 50, 'pause', 0.5, () => {
      if (!this.isPaused()) {
        this.pause();
      }
    });
  }

  resume() {
    super.resume();
    this.tween.play();
    this.backgroundMusic.play();
  }

  pause() {
    super.pause();
    this.tween.pause();
    this.backgroundMusic.pause();
  }

}
