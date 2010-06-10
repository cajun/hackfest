include('../layout.js');

hackfest_uki.layout.login = function() {
    return uki(
        { view: 'Box', rect: '1000 1000', anchors: 'top left right bottom', id: 'login_screen', background:'#333', childViews: [ 
          { view: 'Button', rect: '100 20 100 22', anchors: '', text: 'Login' }
        ]}
    );
}
