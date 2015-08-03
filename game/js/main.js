import SceneManager from './sceneManager';
import IntroScene from './scenes/intro';
import LoadingScene from './scenes/loading';
import MenuScene from './scenes/menu';
import GameScene from './scenes/game';

const introScene = new IntroScene();
SceneManager.createScene('intro', introScene);

introScene.on('done', () => {
  const loadingScene = new LoadingScene();
  SceneManager.createScene('loading', loadingScene);

  loadingScene.on('done', () => {
    SceneManager.createScene('menu', new MenuScene());
    SceneManager.createScene('game', new GameScene());
    SceneManager.goToScene('menu');
  });

  SceneManager.goToScene('loading');
});

SceneManager.goToScene('intro');
