import DS from 'ember-data';

export default DS.Model.extend({
  discount: DS.attr(),
  offer: DS.attr(),
  text: DS.attr()
});
