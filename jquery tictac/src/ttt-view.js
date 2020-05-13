class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click","li", (event => {
      const $square = $(event.currentTarget)
      this.makeMove($square);
    }))
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;

    const toggleLi = e => {
      const $setLi = $(e.target);
      debugger
      // $setLi.toggleClass('selected'); // works as well
      $setLi.removeClass('not-selected');
      console.log($setLi.data("pos"));
      if (currentPlayer === 'x') {
        console.log($setLi.data("pos"));
        $setLi.addClass('player1');
        this.game.playMove(pos);
      } else {
        console.log($setLi.data("pos"));
        $setLi.addClass('player2');
        this.game.playMove(pos);
      }
      console.log($setLi.data("pos"));
    }

    $('ul').on('click','li',toggleLi);


  }

  setupBoard() {
    const $ul = $('<ul>'); //create new ul
    $ul.addClass('board');

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $('<li>');
        $li.addClass('not-selected');
        $li.data("pos",[rowIdx, colIdx])
        $ul.append($li)
      }
    }
    
    this.$el.append($ul)
  }
}


module.exports = View;
