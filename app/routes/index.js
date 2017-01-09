import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    discount: this.store.findAll('discount'),
    offer: this.store.findAll('offer'),
    text: this.store.findAll('text')
  });
  }
})

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
