import Ember from 'ember';

export default Ember.Component.extend({
  isNewsShowing: false,
  actions: {
    newsShow: function() {
      this.set('isNewsShowing', true);
    },
    newsHide: function() {
      this.set('isNewsShowing', false);
    }
  }
});
