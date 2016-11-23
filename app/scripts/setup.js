(function (root) {
    'use strict';

    function bootstrap() {

        var calc = root.Calculator(0);
        console.log(calc);
        //set to true if you wish to follow values in the console
        calc.debug = true;

        var ui = new root.UI();
        ui.setup(calc);
    }

    root.addEventListener('load', bootstrap);

}(this || module.exports));
