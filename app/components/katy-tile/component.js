import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isSelected:selected'],

  click() {
    this.attrs.clicked(this.get('tile'));
  },

  isSelected: Ember.computed('selected.id', function () {
    return this.get('tile.id') === this.get('selected.id');
  }),

  isDeleted: Ember.computed('deleted.[]', function () {
    return this.get('deleted').contains(this.get('tile.random'));
  }),
});
