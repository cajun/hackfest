include('../model.js');

hackfest_uki.model.User = uki.newClass(uki.data.Model, function(Base) {
  uki.data.model.addFields( this, [ 'id', 'username' ] );
});

hackfest_uki.model.User.register = function( username, password, password_confirmation) {
  var user = new hackfest_uki.model.User();
  user.username = username;
  return user;
};
