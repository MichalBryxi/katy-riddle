import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('katy-pexeso', 'Integration | Component | katy pexeso', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{katy-pexeso}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#katy-pexeso}}
      template block text
    {{/katy-pexeso}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
