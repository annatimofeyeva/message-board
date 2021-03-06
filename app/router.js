import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('linkedin');
  this.route('facebook');
  this.route('chat');
  this.route('board', {path: '/board/:board_id'});
  this.route('contact');
});

export default Router;
