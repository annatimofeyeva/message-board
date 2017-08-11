import Ember from 'ember';

export default Ember.Component.extend({
  addNewBoard: false,
    actions: {
      boardFormShow() {
        this.set('addNewBoard', true);
      },

      saveBoard1() {
      var params = {
        author: this.get('author'),
        heading: this.get('heading'),
        content: this.get('content'),
        tag: this.get('tag'),
        image: this.get('image'),
      };
      this.set('addNewBoard', false);
      this.sendAction('saveBoard2', params);
    }
  }
});
