import Ember from 'ember';
import _collection from 'lodash/collection';

export default Ember.Component.extend({
  count: 3,
  selected: null,

  tiles: Ember.computed('count', 'seed', function () {
    let count = this.get('count');
    let id = 0;
    let random;
    let tiles = [];

    for (let i = 0; i < count; i++) {
      let random =  Math.floor(Math.random() * 9999) + 1;

      for (let k = 0; k < 2; k++) {
        let tile = {
          random: random,
          id: id++,
        };

        tiles.push(tile);
      }
    }

    return tiles;
  }),

  tilesShuffled: Ember.computed('tiles.[]', function () {
    return _collection.shuffle(this.get('tiles'));
  }),

  actions: {
    tileClicked(tile) {
      this.set('selected', tile);
    },
  },
});
