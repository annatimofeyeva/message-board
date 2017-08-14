import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(board) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyBoard', board);
        this.transitionTo ('index');
        }
      },
      destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
      }
    }
});
