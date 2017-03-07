angular.module('verbs')
    .controller('verbsController', function ($scope, verbsService) {
            var vm = this;

            vm.title = "Verb lists consult page.";

            activate();

            vm.dataIsReady = false;

            ///////////////////////////////////////////////////////////////////
            function activate() {console.log('Activating verbs controller.');



            }


    });