ig.module(
  'game.entities.drone'
)
.requires(
  'impact.entity'
)
.defines(function(){

EntityDrone = ig.Entity.extend({

  size: {x:16, y:16},
  collides: ig.Entity.COLLIDES.FIXED,
  speed: 400,
  maxVel: {
    x: 400,
    y: 400
  },

  animSheet: new ig.AnimationSheet( 'media/zombie.png', 16, 16 ),

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
