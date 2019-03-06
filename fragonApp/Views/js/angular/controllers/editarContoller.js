angular.module("fragonApp").controller("editarController", function ($scope, clienteService, $http) {

    $scope.Cliente = {};

    $scope.Salvar = function () {
        clienteService.criar($scope.Cliente)
            .then(function () {

            })
       // $http.post('api/Clientes', $scope.Cliente)
    }

    /*if ($scope.formulario.$valid) {
        $scope.Salvar = function () {
            clienteService.criar($scope.Cliente)
        }
    }*/

})