ig.module(
  'game.entities.drone'
)
.requires(
  'impact.entity'
)
.defines(function(){

EntityDrone = ig.Entity.extend({

  size: {x:20, y:20},
  collides: ig.Entity.COLLIDES.FIXED,
  speed: 400,
  maxVel: {
    x: 400,
    y: 400
  },

  animSheet: new ig.AnimationSheet( 'media/paddle-red.png', 20, 20 ),

  init: function( x, y, settings ) {
    this.parent( x, y, settings );

    this.addAnim( 'idle', 1, [0] );
  },
  
  update: function() {

    if( ig.input.state('up') ) {
      this.vel.y = -this.speed;
    }
    else if( ig.input.state('down') ) {
      this.vel.y = this.speed;
    }
    else {
      this.vel.y = 0
    }

    if( ig.input.state('left') ) {
      this.vel.x = -this.speed;
    }
    else if( ig.input.state('right') ) {
      this.vel.x = this.speed;
    }
    else {
      this.vel.x = 0
    }
    
    
    
    this.parent();
  }
});

});