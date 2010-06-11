include('../controller.js');

hackfest_uki.controller.main = function() {
  // Setup var to play with
  var context = hackfest_uki.layout.main();    

  // Screens
  var dashboard = hackfest_uki.layout.dashboard();
  var team = hackfest_uki.layout.team();
  var event = hackfest_uki.layout.event();
  var fight = hackfest_uki.layout.fight();
  var login = hackfest_uki.layout.login();

  // Main div for the content
  var content = uki('#content',context);
  var menu = uki('#menu', context);

  var screens = [ 
    dashboard,
    team,
    event,
    fight
  ];

  context.append(login);

  // Attach the screens to the main screen
  uki.map( screens, function( screen ){
      content.append(screen);
  });


  context.attachTo(window,'1000 1000');
  
  hideAllChildren();
  login.visible(true);
  dashboard.visible(true);

  // Switching Layouts
  uki('Button[text^=Dash]').click( function(){
    hideAllChildren();
    dashboard.visible(true);
    content.layout();
  });

  uki('Button[text=Team]').click( function(){
    hideAllChildren();
    team.visible(true);
    content.layout();
  });

  uki('Button[text=Event]').click( function(){
    hideAllChildren();
    event.visible(true);
    content.layout();
  });

  uki('Button[text=Fight]').click( function(){
    //hideAllChildren();
    login.visible(true);
    context.layout();
  });

  // Util function to change the screens
  function hideAllChildren(){
    uki.map( screens, function(screen){
        screen.visible(false);
    });
  }
}
