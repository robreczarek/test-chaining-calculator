(function () {

    'use strict';

    function bootstrap() {
        var calc = new Calculator();
        var ui = new UI();
        ui.setup(calc);
    }

    window.addEventListener('load', bootstrap);

}());
