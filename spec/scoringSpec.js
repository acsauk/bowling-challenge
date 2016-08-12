'use strict';

describe('BowlingGame', function() {

  it('can handle a gutter game', function() {
    var game = new BowlingGame();
    for(var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('should handle rolling all ones', function() {
    var game = new BowlingGame();
    for(var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });

});
