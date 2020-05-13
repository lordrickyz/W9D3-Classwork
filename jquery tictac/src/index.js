const View = require('./ttt-view');// require appropriate file
const Game = require('../game_script/game'); // require appropriate file

  $(() => {
    // Your code here
    const indexEl = $('.ttt');
    const game = new Game();

    new View(game, indexEl);
  });
