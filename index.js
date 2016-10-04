(function () {

    'use strict';

    function bootstrap() {

        var calc = new Calculator(0);
        calc.debug = true;
        var ui = new UI();
        ui.setup(calc);

        console.log( Calculator(3).add(5).multiply(2).value() );
        console.log( Calculator(4).add(2).multiply(2).value() );

    }

    window.addEventListener('load', bootstrap);

}());
