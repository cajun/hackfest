include('../controller.js');

hackfest_uki.controller.login = function() {
  var context = uki('#login_screen');
  var register_popup = hackfest_uki.layout.register_popup();

  uki('#login').click( function(){
    context.visible(false);
  });
  
  uki('#register').click( function(){
    uki('#register_popup').toggle();
  });
}
