angular.module('admin')
    .controller('adminController', function ($scope) {
            var vm = this;

            vm.title = "Admin page";

            vm.changeList = changeList;
            //vm.openModal = openModal;

            activate();

            vm.dataIsReady = false;
            vm.verbsList = null;

            ///////////////////////////////////////////////////////////////////
            function activate() {console.log('Activating admin controller.');


                gapi.client.ivchecker.verbs.difficulty({'url_param_a': 'difficulty', 'url_param_b': 2}).execute(
                                function (resp) {
                                    console.log('Respuesta del server 2')
                                    console.log(resp);



                                    $scope.$apply();
                                });


            }


/*
            function openModal(size)
            {
                var modalInstance = $modal.open({
                    templateUrl: 'views/admin/verb_admin.html',
                    controller: 'myModalController',
                    size: size,
                    resolve: {
                        Items: function() //scope del modal
                        {
                            return "Hola que asé";
                        }
                    }
                });
            }*/
            function changeList(level){

                console.log('Change list clickeed');

                gapi.client.ivchecker.verbs.difficulty({'url_param_a': 'difficulty', 'url_param_b': level}).execute(
                                function (resp) {
                                    console.log('Respuesta del server 2');
                                    console.log(resp);
                                     if (resp.code == 404){
                                        console.log('not verbs');
                                        vm.verbsList = null;
                                    }
                                    else{
                                        vm.verbsList = resp;
                                    }


                                    $scope.$apply();
                                });
            }

    })
/*
.controller('myModalController', ['$scope','$modalInstance','Items', function($scope, $modalInstance,Items)
{
    $scope.items = Items;

	$scope.save = function (param)
	{
		console.log(param)
	};

    $scope.cancel = function ()
    {
    	$modalInstance.dismiss('cancel');
    };
}]);*/