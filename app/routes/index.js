import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    boards: this.store.findAll('board'),
    answers: this.store.findAll('answer')
  });
},

  actions: {
    saveBoard3(params) {
      var newBoard = this.store.createRecord('board', params);
      newBoard.save();
      this.transitionTo('index');
    }
  }
});
