import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if (confirm('Are you sure you wanna delete this rental that makes abuncha money')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
