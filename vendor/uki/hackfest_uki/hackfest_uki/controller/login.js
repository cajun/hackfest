include('../controller.js');

hackfest_uki.controller.login = function() {
  var context = uki('#login_screen');

  uki('Button[text=Login]').click( function(){
    context.visible(false);
  });
}
