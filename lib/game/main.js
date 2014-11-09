var score = 0;

ig.module(
  'game.main'
)
.requires(
  'impact.game',
  'impact.font',
  'plugins.impact-splash-loader',
  'plugins.director.director',

  'game.entities.drone',

  'game.levels.intro',
  'game.levels.main',
  'game.levels.level1',
  'game.levels.level2'

)
.defines(function(){

MyGame = ig.Game.extend({

  // Load a font
  font: new ig.Font( 'media/04b03.font.png' ),


  init: function() {
    var self = this;
    ig.input.bind( ig.KEY.W, 'up' );
    ig.input.bind( ig.KEY.S, 'down' );
    ig.input.bind( ig.KEY.A, 'left' );
    ig.input.bind( ig.KEY.D, 'right' );


    ig.input.bind( ig.KEY.K, 'cluster' );
    ig.input.bind( ig.KEY.L, 'decluster' );


    $('.intro').addClass('active');
    this.myDirector = new ig.Director(this, [LevelLevel2,LevelIntro, LevelLevel1, LevelMain]);
    $('.intro').click(function(){
      $('.intro').removeClass('active');
      self.myDirector.nextLevel()
    })
  },

  update: function() {
    // Update all entities and backgroundMaps
    this.parent();

    // Add your own, additional update code here
    var drones = ig.game.getEntitiesByType('EntityDrone');
    var totalX = 0;
    var totalY = 0;
    drones.forEach(function(drone){
      totalX += drone.pos.x;
      totalY += drone.pos.y;
    });

    this.averageDroneCenter = {
      x: totalX / drones.length,
      y: totalY / drones.length
    };

    this.screen.x = this.averageDroneCenter.x - ig.system.width / 2;
    this.screen.y = this.averageDroneCenter.y - ig.system.height / 2;
  },

  draw: function() {
    // Draw all entities and backgroundMaps
    this.parent();
  }
});


ig.main( '#canvas', MyGame, 60, 960, 496, 1, ig.ImpactSplashLoader);

});
