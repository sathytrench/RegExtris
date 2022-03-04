import store from '../store';
import { clearPlayerData } from '../store/playerRegex';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
    this.tetrisScore;
    this.regExScore;
  }

  init(data) {
    this.tetrisScore = data.tetrisScore || 0;
    this.regExScore = data.regExScore || 0;
  }

  preload() {
    this.load.image('title', 'assets/spritesheets/REGEXTRISbw2.png');
    this.load.script(
      'chartjs',
      'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js'
    );
  }

  create() {
    this.enter = this.input.keyboard.addKey('ENTER');
    this.shift = this.input.keyboard.addKey('SHIFT');

    //chart that shows your scorebreakdown for this game
    let gameScore = {
      type: 'doughnut',
      data: {
        labels: ['Tetris: ' + this.tetrisScore, 'RegEx: ' + this.regExScore],
        backgroundColor: 'rgba(229, 170, 49, 1)',
        borderColor: 'rgba(229, 170, 49, 1)',
        borderColor: ['rgba(229, 170, 49, 1)', 'rgba(153, 0, 255, 1)'],
        datasets: [
          {
            data: [this.tetrisScore, this.regExScore],
            backgroundColor: ['rgba(229, 170, 49, 1)', 'rgba(153, 0, 255, 1)'],
          },
        ],
      },
      options: {
        showTooltips: true,
        legend: {
          labels: {
            position: 'bottom',
            fontColor: 'white',
          },
        },
        title: {
          display: true,
          text: 'Your Scores',
          fontSize: 24,
          fontColor: 'white',
          fontFamily: 'Courier',
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        tooltip: {
          mode: 'nearest',
        },
      },
    };
    //Display the The Game over Text
    this.add
      .text(600, 100, `good job!`, {
        fontSize: '24px',
        fontFamily: 'retroFont',
        align: 'center',
      })
      .setOrigin(0.5, 0.5);
    this.add
      .text(600, 140, `Final Score: ${this.tetrisScore + this.regExScore}`, {
        fontSize: '20px',
        fontFamily: 'retroFont',
      })
      .setOrigin(0.5, 0.5);
    this.add
      .text(600, 180, `Press enter to go back to the menu!`, {
        fontSize: '24px',
        fontFamily: 'retroFont',
      })
      .setOrigin(0.5, 0.5);

    //displays the title
    this.title = this.add.sprite(600, 35, 'title').setScale(0.2).setDepth(11);

    //displays the doughnut chart
    this.rexUI.add.chart(600, 400, 200, 100, gameScore).resize(300, 300);
  }

  update() {
    if (Phaser.Input.Keyboard.JustUp(this.enter)) {
      store.dispatch(clearPlayerData());
      this.scene.start('MenuScene');
    }
  }
}
