import Pixi from 'pixi.js';
import debounce from 'lodash.debounce';

class SceneManager {

  constructor(width = 1280, height = 960) {
    this.width = width;
    this.height = height;
    this._scenes = [];

    this.renderer = Pixi.autoDetectRenderer(width, height, {view: document.getElementById('game-canvas')});
    this.renderer.backgroundColor = 0xFFFFFF;
    this._resize();
    requestAnimationFrame((time) => this.loop(time));
    window.addEventListener('resize', debounce(this._resize.bind(this), 200));
  }

  loop(time) {
    requestAnimationFrame((time) => this.loop(time));

    if (!this._currentScene || this._currentScene.isPaused()) return;

    this._currentScene.update(time);

    this.renderer.render(this._currentScene);
  }

  createScene(name, scene) {
    if (this._scenes[name]) return null;
    this._scenes[name] = scene;
    return scene;
  }

  goToScene(name) {
    if (this._scenes[name]) {
      if (this._currentScene) this._currentScene.pause();
      this._currentScene = this._scenes[name];
      this._currentScene.resume();
    } else {
      throw new Error('Scene already in use');
    }
  }

  _resize(keepRatio = true) {
    if (keepRatio) {
      this.ratio = Math.min(window.innerWidth / this.width, window.innerHeight / this.height);
      const height = (this.height * this.ratio).toFixed(0);
      const width = (this.width * this.ratio).toFixed(0);
      this.renderer.view.style.height = `${height}.px`;
      this.renderer.view.style.width = `${width}.px`;
    } else {
      this.renderer.view.style.height = `${window.innerWidth}.px`;
      this.renderer.view.style.width = `${window.innerHeight}.px`;
    }
  }

}

export default new SceneManager();
