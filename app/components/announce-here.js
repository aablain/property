import Ember from 'ember';

export default Ember.Component.extend({
  isNewsShowing: false,
  actions: {
    NewsShow: function(){
      this.set('isNewsShowing', true);
    },
    imageHide: function() {
      this.set('isNewsShowing', false);
    }
  }
});
