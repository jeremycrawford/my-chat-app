// This is our view that will be renedered on our page.

var MessageView = Backbone.View.extend({

  tagName: "div", // This does nothing because already happens by default

  className: 'new-message',

  createTemplate: _.template($('#message-list-template').text()),


  initialize: function(){
    $('.js-full-list').prepend( this.el );
    
    this.render();

  },

  render: function(){
    var renderedTemplate = this.createTemplate( this.model.attributes )

    this.$el.html( renderedTemplate );

  }

});