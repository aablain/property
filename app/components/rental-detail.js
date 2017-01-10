import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Are you sure you wanna delete this rental that makes abuncha money')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
