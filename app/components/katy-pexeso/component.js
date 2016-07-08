import Ember from 'ember';

export default Ember.Component.extend({
  width: 10,
  height: 10,

  seed: Ember.computed(function () {
    return Math.floor(Math.random() * 100);
  }),

  tiles: Ember.computed('width', 'height', 'seed', function () {
    let width = this.get('width');
    let height = this.get('height');
    let tiles = [];

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        let w =  Math.floor(Math.random() * 5) + 1;
        let h =  Math.floor(Math.random() * 5) + 1;

        tiles.push(
          {
            colspan: w,
            rowspan: h,
            img_w: w * 100,
            img_h: h * 100,
          }
        );
      }
    }

    return tiles;
  }),
});
