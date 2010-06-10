include('../view.js');

uki.view.declare('hackfest_uki.view.Ball', uki.view.Base, function(Base) {
    
    this._createDom = function() {
        this._running = false;
        this._dom = uki.createElement('div', null, clock_inner_html());
    };

    this.initStyles = function(){
      var style = new uki.theme.Template(
        ).render();

      uki.dom.createStylesheet(style);
    };

    function clock_inner_html(){
      return '<div id="ball"></div>';
    };
   
    this.execute = function(){
    if( !this._running ){
      this._running = true;
      var x = this.rect().midX();
      var y = this.rect().midY();
      console.log( x);
      var R = Raphael("ball"), r = 150;
      R.ball(x, y, r, Math.random());
    }

    };
});


Raphael.fn.ball = function (x, y, r, hue) {
  hue = hue || 0;
  return this.set(
      this.ellipse(x, y + r - r / 5, r, r / 2).attr({fill: "rhsb(" + hue + ", 1, .25)-hsb(" + hue + ", 1, .25)", stroke: "none", opacity: 0}),
      this.ellipse(x, y, r, r).attr({fill: "r(.5,.9)hsb(" + hue + ", 1, .75)-hsb(" + hue + ", .5, .25)", stroke: "none"}),
      this.ellipse(x, y, r - r / 5, r - r / 20).attr({stroke: "none", fill: "r(.5,.1)#ccc-#ccc", opacity: 0})
      );
};
