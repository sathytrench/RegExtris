import 'phaser';
import config from './config/config';

import MainScene from './scenes/MainScene';
import MenuScene from './scenes/MenuScene';
import GameOverScene from './scenes/GameOverScene';
import LearnMode from './scenes/LearnMode';
import LearnModeTutorial from './scenes/LearnModeTutorial';
import MainTutorial from './scenes/MainTutorial';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('MainScene', MainScene);
    this.scene.add('MenuScene', MenuScene);
    this.scene.add('GameOverScene', GameOverScene);
    this.scene.add('LearnMode', LearnMode);
    this.scene.add('LearnModeTutorial', LearnModeTutorial);
    this.scene.add('MainTutorial', MainTutorial);
    this.scene.start('MenuScene');
  }
}

window.game = new Game(config);
