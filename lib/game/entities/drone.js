ig.module(
  'game.entities.drone'
)
.requires(
  'impact.entity'
)
.defines(function(){

  EntityDrone = ig.Entity.extend({

    size: {x:20, y:20},
    collides: ig.Entity.COLLIDES.PASSIVE,
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
    },

    handleMovementTrace: function(res) {
      var pos = res.pos;
      var edge = ig.game.backgroundMaps[0];

      checkTile = function(x,y) {
        console.log(edge.data[x].length)
        var checkDistance = false;
        if(x < 0 || y < 0) {
          checkDistance = true;
        } else if(x > 59 || y > 31) {
          checkDistance = true;
        } else if (edge.data[x][y] > 0) {
          // console.log("data edge", edge.data[x][y]);
          checkDistance = true;
        }

        if(checkDistance) {
          if(pos.x < 9 || pos.x > 951) {
            return true;
          } else if(pos.y < 9 || pos.y > 487) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
      var tileX = Math.floor(pos.x/16);
      var tileY = Math.floor(pos.y/16);
      if(checkTile(tileX, tileY)){
        this.kill();
      }
      this.parent(res);
    }
  });

});