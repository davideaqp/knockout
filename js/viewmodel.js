(function(jjApp) {
    'use strict';

    function ViewModel(data) {
        this.registros = data
    }

    var viewModel = new ViewModel(jjApp.arreglo);

    ko.applyBindings(viewModel);

}(window.jjApp))