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
    name: "portal", //Name portals in the editor: use portal.[color]

    init: function(x, y, settings) {
      this.parent(x, y, settings);

      if(this.name === "portal.red") {
        this.addAnim('idle', 1, [1]);
      } else {
        this.addAnim( 'idle', 1, [0] );
      }

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
