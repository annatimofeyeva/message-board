import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('board');
  },

  actions: {
    saveBoard3(params) {
      var newBoard = this.store.createRecord('board', params);
      newBoard.save();
      this.transitionTo('index');
    }
  }
});
