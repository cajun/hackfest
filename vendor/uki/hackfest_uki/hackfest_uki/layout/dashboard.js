include('../layout.js');

hackfest_uki.layout.dashboard = function() {
    return uki( 
        [
        { view: 'Box', rect: '0 0 500 500', anchors: 'top left', background: '#333', childViews:[
          { view: 'hackfest_uki.view.Clock', rect: '500 500', anchors: 'top left right bottom', id: 'clock' }
        ]},
        { view: 'Box', rect: '500 0 500 500', anchors: 'top right', background: 'yellow', childViews:[
          { view: 'hackfest_uki.view.Chart', rect: '500 500', anchors: 'top left right bottom', id: 'chart' }
        ]},
        { view: 'Box', rect: '0 500 500 500', anchors: 'left bottom', background: 'black', childViews:[
          { view: 'hackfest_uki.view.Ball', rect: '500 500', anchors: 'top left right bottom', id: 'ball' }
        ]},
        { view: 'Box', rect: '500 500 500 500', anchors: 'right bottom', background: 'white', childViews:[
          { view: 'Button', rect: '100 22', anchors: 'top left', text: 'foo' }
        ]}
        ]
    );
}
