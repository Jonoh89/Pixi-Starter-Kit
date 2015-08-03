import { Container } from 'pixi.js';

export default class Scene extends Container {

  constructor() {
    super();
    this._paused = true;
  }

  update() {}

  pause() {
    this._paused = true;
  }

  resume() {
    this._paused = false;
  }

  isPaused() {
    return this._paused;
  }

}
