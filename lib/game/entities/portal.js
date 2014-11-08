ig.module(
  'game.entities.portal'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityPortal = ig.Entity.extend({
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      
    }
  });
});