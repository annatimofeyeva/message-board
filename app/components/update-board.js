import Ember from 'ember';

export default Ember.Component.extend({
  updateBoardForm: false,
  actions: {
    updateBoardForm() {
      this.set('updateBoardForm', true);
    },
    update(board) {
      var params = {
        author: this.get('author'),
        heading: this.get('heading'),
        content: this.get('content'),
        tag: this.get('tag'),
        image: this.get('image'),
      };
      this.set('updateBoardForm', false);
      this.sendAction('update', board, params);
    }
  }
});
