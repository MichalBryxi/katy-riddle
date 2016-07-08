import Ember from 'ember';
import _collection from 'lodash/collection';

export default Ember.Component.extend({
  tagName: '',
  count: 16,
  selected: null,
  deleted: [],

  tiles: Ember.computed('count', function () {
    let count = this.get('count');
    let id = 0;
    let random;
    let tiles = [];

    for (let i = 0; i < count; i++) {
      let random =  Math.floor(Math.random() * 99999) + 1;

      for (let k = 0; k < 2; k++) {
        let tile = {
          random: random,
          isDeleted: false,
          id: id++,
        };

        tiles.push(tile);
      }
    }

    return tiles;
  }),

  isFinished: Ember.computed('progress', function () {
    return this.get('progress') === 100;
  }),

  progress: Ember.computed('count', 'deleted.[]', function () {
    return Math.floor((this.get('deleted').length / (this.get('count'))) * 100);
  }),

  tilesShuffled: Ember.computed('tiles.[]', function () {
    return _collection.shuffle(this.get('tiles'));
  }),

  actions: {
    deleteTile(random) {
      this.get('deleted').pushObject(random);
    },

    tileClicked(tile) {
      let selected = this.get('selected');

      if (!Ember.isEmpty(selected)) {
        if (selected.id !== tile.id) {
          if (selected.random === tile.random) {
            this.send('deleteTile', tile.random);
            return;
          }
        }
      }

      this.set('selected', tile);
    },
  },
});
