(function () {

    'use strict';

    function bootstrap() {
        var debug = true;
        var calc = new Calculator(0, debug);
        var ui = new UI();
        ui.setup(calc);

        //not working
        //console.log(calc.add(5).mutiply(2).value());
    }

    window.addEventListener('load', bootstrap);

}());
