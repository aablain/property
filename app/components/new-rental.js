import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    saveRental1() {
      var params = {
      owner: this.get('owner'),
      city: this.get('city'),
      type: this.get('type'),
      bedrooms: this.get('bedrooms'),
      cats: this.get('cats'),
      tile: this.get('tile'),
      image: this.get('image'),
    };
    this.set('addNewRental', false);
    this.sendAction('saveRental2', params);
    }
  }
});
