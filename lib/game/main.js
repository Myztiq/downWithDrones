ig.module(
  'game.main'
)
.requires(
  'impact.game',
  'impact.font',

  'game.entities.drone',

<<<<<<< HEAD
  'game.levels.main',
  'game.levels.level1'
=======
  'game.levels.main'
>>>>>>> be71f2b22a7f19300349a822f1d871ce2374d782

)
.defines(function(){

MyGame = ig.Game.extend({

  // Load a font
  font: new ig.Font( 'media/04b03.font.png' ),


  init: function() {
    ig.input.bind( ig.KEY.W, 'up' );
    ig.input.bind( ig.KEY.S, 'down' );
    ig.input.bind( ig.KEY.A, 'left' );
    ig.input.bind( ig.KEY.D, 'right' );

<<<<<<< HEAD
    this.loadLevel( LevelLevel1 );
=======
    ig.input.bind( ig.KEY.K, 'cluster' );
    ig.input.bind( ig.KEY.L, 'decluster' );

    this.loadLevel( LevelMain );
>>>>>>> be71f2b22a7f19300349a822f1d871ce2374d782
  },

  update: function() {
    // Update all entities and backgroundMaps
    this.parent();

    // Add your own, additional update code here
  },

  draw: function() {
    // Draw all entities and backgroundMaps
    this.parent();
  }
});


ig.main( '#canvas', MyGame, 60, 960, 496, 1);

});
