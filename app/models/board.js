import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  heading: DS.attr(),
  tag: DS.attr(),
  image: DS.attr()
});
