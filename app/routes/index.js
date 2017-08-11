import Ember from 'ember';

// var boards = [{
//   heading: "In Ember, what is the difference between this and this.controller?",
//   author: "szaske",
//   content: "I'm attempting to build a simple Ember application that collects information from a form. I'm using this tutorial as a guide. In the tutorial it has the following code to grab information from a form... In my solution I could not get this to work. this.get('whatever') always showed up as 'undefined' in my code. After a bit of debugging I was able to find a solution, but it meant changing my code from this.get('city') to this.controller.get('city'). Can someone explain what I'm doing wrong or why?",
//   tag: "#ember#js#this.controller",
//   date: "Aug 11 '17 at 19:01'"
// }, {
//   heading: "Javascript promise chaining issues (Ember)",
//   author: "Cameron",
//   content: "I'm trying to upload a file to a remote server, get the path for that file on that server, and then save it in a record to my own API. Over half the time, the code crashes because returnedNewFile is undefined (though I've checked console.log(newFile) in the previous .then() function and it's always a promise object. What could be causing this behavior? What could be causing returnedNewFile to sometimes be null/undefined? I'm using Django REST + django-rest-json-api + ember.js 2.6, and this code is in a component's javascript file. Thank you in advance!",
//   tag: "#ember#js#js#promise",
//   date: "Jul 19 '16 at 20:13"
// }];

export default Ember.Route.extend({
  model(){
    return this.store.findAll('board');
  },
});
