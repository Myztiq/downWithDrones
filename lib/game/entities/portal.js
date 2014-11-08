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
    name: "portal",

    init: function(x, y, settings) {
      this.parent(x, y, settings);

      this.addAnim( 'idle', 1, [0] );

    },

    check: function(other) {
      if(this.name.indexOf(".") > -1 && other.name.indexOf(".") > -1 && this.name.split(".")[1] === other.name.split(".")[1]) {
        window.score += 1;
      } else {
        window.score -=1;
      }
      $("#score").html(window.score);
      other.kill();
    }
  });
});
