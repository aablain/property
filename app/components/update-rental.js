import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
      updateRentalForm() {
        this.set('updateRentalForm', true);
    },
    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        bedrooms: this.get('bedrooms'),
        cats: this.get('cats'),
        tile: this.get('tile'),
        image: this.get('image'),
      };
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
