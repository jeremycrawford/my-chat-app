var Profile = Backbone.Model.extend({
  defaults: {
  options: {},
    username: 'Anonymous',
    messageText: "no entry",
    messageDate: _.now(),
    appId: "Team BCH"
  }
});

var ProfileCollection = Backbone.Collection.extend({
  model: Profile,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/messages'
})