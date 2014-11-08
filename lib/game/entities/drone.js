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
    name: 'drone',
    type: ig.Entity.TYPE.A,

    animSheet: new ig.AnimationSheet( 'media/zombie.png', 16, 16 ),


    init: function( x, y, settings ) {
      this.parent( x, y, settings );


      this.addAnim( 'idle', 1, [0] );
    },

    update: function() {
      var self = this;

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


      //// Master based clustering
      //if( ig.input.state('cluster') || ig.input.state('decluster') ){
      //  var masterEntity = ig.game.getEntityByName('master');
      //  if(this != masterEntity){
      //    if(ig.input.state('decluster')){
      //      this.moveRelativeTo(masterEntity, -1);
      //    }else{
      //      this.moveRelativeTo(masterEntity, 1);
      //    }
      //  }else{
      //    this.vel.x = 0;
      //    this.vel.y = 0;
      //  }
      //}

      //// Furthest/Closest
      //if( ig.input.state('cluster') || ig.input.state('decluster') ) {
      //  var drones = ig.game.getEntitiesByType('EntityDrone');
      //  var longestDistance = 0;
      //  var furthestDrone = null;
      //  var shortestDistance = 99999999999;
      //  var closestDrone = null;
      //  drones.forEach(function (drone) {
      //    var distance = self.distanceTo(drone);
      //    if (distance > longestDistance) {
      //      longestDistance = distance;
      //      furthestDrone = drone;
      //    }
      //    if(distance < shortestDistance){
      //      shortestDistance = distance;
      //      closestDrone = drone;
      //    }
      //  });
      //
      //  if(ig.input.state('decluster')){
      //    this.moveRelativeTo(closestDrone, -1);
      //  }else{
      //    if (longestDistance > 50) {
      //      this.moveRelativeTo(furthestDrone, 1);
      //    }
      //  }
      //
      //}


      //Average point
      if( ig.input.state('cluster') || ig.input.state('decluster') ) {
        var center = {
          pos: ig.game.averageDroneCenter,
          size: {
            x: 0,
            y: 0
          }
        };
        if(ig.input.state('decluster')){
          this.moveRelativeTo(center, -1);
        }else{
          this.moveRelativeTo(center, 1);
        }

      }

      this.parent();
    },
    moveRelativeTo: function(entity, direction){
      var angle = this.angleTo(entity);
      var x = Math.cos(angle);
      var y = Math.sin(angle);

      if(direction == 1){
        if(this.distanceTo(entity) < 30){
          var danceSpeed = this.speed / 2;
          this.vel.x = Math.random() * danceSpeed - danceSpeed / 2;
          this.vel.y = Math.random() * danceSpeed - danceSpeed / 2;
          return;
        }
      }

      this.vel.x = x * this.speed * direction;
      this.vel.y = y * this.speed * direction;
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
