ig.module(
  'game.entities.portal'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityPortal = ig.Entity.extend({
    size: {x:48, y:48},
    animSheet: new ig.AnimationSheet( 'media/puck.png', 48, 48 ),
    checkAgainst: ig.Entity.TYPE.A,

    init: function(x, y, settings) {
      this.parent(x, y, settings);

      this.addAnim( 'idle', 1, [0] );

    },

    check: function(other) {
      //TODO: scoring
      console.log("you scored");
      other.kill();
    }
  });
});
