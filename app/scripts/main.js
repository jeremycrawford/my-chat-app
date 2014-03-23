console.log('This is our chat app!');

$(document).ready(function(){

  profile = new ProfileCollection();

  profile.fetch({
    success: function(){
      profile.each(function(message){
        new MessageView({model: message});
        $('.js-full-list').scrollTop($('.js-full-list')[0].scrollHeight);
      })
    },

    error: function(){
      console.log('error')
    }
  });


 newUser = "Steve"

 $('.add-album-button').click(function(){

 newUser = $('.js-username').val()
 
 });




  $('.js-input-submit').click(function(){

    var message = new Profile()

      if($('.js-message-input').val()) {message.set({messageText: $('.js-message-input').val()})};
      if(newUser) {message.set({username: $('.js-username').val()})};

    var freshModel = profile.add(message);

    new MessageView({model: freshModel});

    freshModel.save()
  });

});