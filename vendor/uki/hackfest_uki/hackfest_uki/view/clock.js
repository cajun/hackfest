include('../view.js');

uki.view.declare('hackfest_uki.view.Clock', uki.view.Container, function(Base) {
    
    this._createDom = function() {
        this._running = false;
        this._dom = uki.createElement('div', null, clock_inner_html());
    };

    this.initStyles = function(){
      var style = new uki.theme.Template(
        " #time { text-align: center; font: 100 3em 'Helvetica Neue', Helvetica, Arial, sans-serif; "
        ).render();

      uki.dom.createStylesheet(style);
    };

    function clock_inner_html(){
      return '<div id="holder"></div>' + 
            '<div id="time">' +
            '<span id="h"></span>:<span id="m"></span>:<span id="s"></span> <span id="ampm"></span> · <span id="d"></span>/<span id="mnth"></span> ' +
            '</div> '
    };

    this.execute = function() {
      if( !this._running ){
        this._running = true;
        var r = Raphael("holder", 500, 500),
            R = 200,
            init = true,
            param = {stroke: "#fff", "stroke-width": 30},
            html = [
                document.getElementById("h"),
                document.getElementById("m"),
                document.getElementById("s"),
                document.getElementById("d"),
                document.getElementById("mnth"),
                document.getElementById("ampm")
            ];

        var sec = r.path(["M", 250.001, 250.001 - R, "A", R, R, 0, 0, 1, 301, 250 - R].join(",")).attr(param);
        R = 160;
        var min = r.path(["M", 250.001, 250.001 - R, "A", R, R, 0, 0, 1, 301, 250 - R].join(",")).attr(param);
        R = 120;
        var hor = r.path(["M", 250.001, 250.001 - R, "A", R, R, 0, 0, 1, 301, 250 - R].join(",")).attr(param);
        R = 80;
        var day = r.path(["M", 250.001, 250.001 - R, "A", R, R, 0, 0, 1, 301, 250 - R].join(",")).attr(param);
        R = 40;
        var mon = r.path(["M", 250.001, 250.001 - R, "A", R, R, 0, 0, 1, 301, 250 - R].join(",")).attr(param);
        var pm = r.circle(250, 250, 16).attr({stroke: "none", fill: Raphael.hsb2rgb(15 / 200, 1, .75).hex});
        html[5].style.color = Raphael.hsb2rgb(15 / 200, 1, .75).hex;

        function updateVal(value, total, R, hand, id) {
            var alpha = 360 / total * value,
                a = (90 - alpha) * Math.PI / 180,
                x = 250 + R * Math.cos(a),
                y = 250 - R * Math.sin(a),
                color = "hsb(".concat(Math.round(R) / 200, ",", value / total, ", .75)"),
                path;
            if (total == value) {
                path = ["M", 250.001, 250.001 - R, "A", R, R, 0, 1, 1, 299.99, 250.001 - R].join();
            } else {
                path = ["M", 250.001, 250.001 - R, "A", R, R, 0, +(alpha > 180), 1, x, y].join();
            }
            x = x == 250 ? 251 : x;
            if (total == value || init || !value) {
                hand.attr({stroke: color, path: path});
            } else {
                hand.animate({stroke: color, path: path}, 1000);
            }
            html[id].innerHTML = (value < 10 ? "0" : "") + value;
            html[id].style.color = Raphael.getRGB(color).hex;
        };

        (function () {
            var d = new Date;
            var am = (d.getHours() < 12);
            var h = d.getHours() % 12 || 12;
            updateVal(d.getSeconds(), 60, 200.001, sec, 2);
            updateVal(d.getMinutes(), 60, 160.001, min, 1);
            updateVal(h, 12, 120.001, hor, 0);
            updateVal(d.getDate(), 31, 80.001, day, 3);
            updateVal(d.getMonth() + 1, 12, 40.001, mon, 4);
            pm[(am ? "hide" : "show")]();
            html[5].innerHTML = am ? "AM" : "PM";
            // r.safari();
            setTimeout(arguments.callee, 1000);
            init = false;
        })();
      };
    }

});
