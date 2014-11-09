ig.module(
  'game.entities.portal'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityPortal = ig.Entity.extend({
    size: {x:32, y:32},
    animSheet: new ig.AnimationSheet( 'media/placeholder-portal.png', 32, 32 ),
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
