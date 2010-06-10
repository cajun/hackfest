(function() {
// define namespace
hackfest_uki = {};

// all core modules
include('frameworks/uki/uki-core.js');

// used views, comment out unused ones
include('frameworks/uki/uki-view/view/box.js');
include('frameworks/uki/uki-view/view/image.js');
include('frameworks/uki/uki-view/view/button.js');
include('frameworks/uki/uki-view/view/checkbox.js');
include('frameworks/uki/uki-view/view/radio.js');
include('frameworks/uki/uki-view/view/textField.js');
include('frameworks/uki/uki-view/view/label.js');
include('frameworks/uki/uki-view/view/list.js');
include('frameworks/uki/uki-view/view/table.js');
include('frameworks/uki/uki-view/view/slider.js');
include('frameworks/uki/uki-view/view/splitPane.js');
include('frameworks/uki/uki-view/view/scrollPane.js');
include('frameworks/uki/uki-view/view/popup.js');
include('frameworks/uki/uki-view/view/flow.js');
include('frameworks/uki/uki-view/view/toolbar.js');

// theme
include('frameworks/uki/uki-theme/airport.js');

// libs
include('frameworks/raphael/raphael.js');

// data
include('frameworks/uki/uki-data/model.js');
include('hackfest_uki/layout/main.js');
include('hackfest_uki/controller/main.js');
include('hackfest_uki/layout/dashboard.js');
include('hackfest_uki/layout/team.js');
include('hackfest_uki/layout/event.js');
include('hackfest_uki/layout/fight.js');
include('hackfest_uki/view/clock.js');
include('hackfest_uki/view/chart.js');
include('hackfest_uki/view/ball.js');
include('hackfest_uki/layout/login.js');
include('hackfest_uki/controller/login.js');


uki.theme.airport.imagePath = 'i/';

// skip interface creation if we're testing
if (window.TESTING) return;

hackfest_uki.controller.main();
hackfest_uki.controller.login();

})();
