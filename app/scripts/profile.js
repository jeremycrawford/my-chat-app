// This is my model

var Profile = Backbone.Model.extend({
  defaults: {
  options: {},
    username: 'Anonymous',
    messageText: "no entry",
    messageDate: _.now(),
    appId: "Team BCH"
  },
});

var Messages = Backbone.Model.extend({
  defaults: {
  options: {},
    username: 'Anonymous',
    messageText: "no entry",
    messageDate: _.now(),
    appId: "Team BCH"
  },
});



// Now you take your model and send it baack to the collections contructor


var ProfileCollection = Backbone.Collection.extend({
  model: Profile, // This is calling to the instance of the model constructor name.

var ProfileCollection = Backbone.Collection.extend({
  model: Messages, // This is calling to the instance of the model constructor name.

  url: 'http://tiny-pizza-server.herokuapp.com/collections/messages'
})