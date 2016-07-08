import Ember from 'ember';

export default Ember.Component.extend({
  width: 3,
  height: 3,
  base: 150,

  seed: Ember.computed(function () {
    return Math.floor(Math.random() * 100);
  }),

  tiles: Ember.computed('width', 'height', 'seed', function () {
    let width = this.get('width');
    let height = this.get('height');
    let base = this.get('base');
    let id;
    let tiles = [];

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        let id =  Math.floor(Math.random() * 9999) + 1;
        let tile = {
          id: id,
        };

        tiles.push(tile);
        tiles.push(tile);
      }
    }

    return tiles;
  }),

  tilesShuffled: Ember.computed('tiles.[]', function () {
    let tiles = this.get('tiles');
    let j = this.get('width') * this.get('height');

    while (j > 0) {
      let i = Math.floor(Math.random() * j--);
      let temp = tiles[i];
      tiles[i] = tiles[j];
      tiles[j] = temp;
    }

    return tiles;
  }),
});
