import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isSelected:selected'],

  click() {
    this.attrs.clicked(this.get('tile'));
  },

  isSelected: Ember.computed('selected.id', function () {
    console.log('a');
    return this.get('tile.id') === this.get('selected.id');
  }),
});
