import Ember from 'ember';

export default Ember.Component.extend({
   updateBoardForm: false,
  actions: {
    update(board, params) {
        this.sendAction('update', board, params);
      },
    delete(board) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyBoard', board);
        }
      }
    }
});
