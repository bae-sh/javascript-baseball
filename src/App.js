const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.computer = [];
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setAnswer();
    this.input();
  }
  setAnswer() {
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  input() {}
  checkAnswer() {}
}

const app = new App();
app.play();
// module.exports = App;
