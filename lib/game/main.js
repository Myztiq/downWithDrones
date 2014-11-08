ig.module(
  'game.main'
)
.requires(
  'impact.game',
  'impact.font',

  'game.entities.drone',

  'game.levels.main',
  'game.levels.level1'

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

    this.loadLevel( LevelLevel1 );
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
