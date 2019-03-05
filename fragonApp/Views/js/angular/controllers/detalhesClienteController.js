angular.module("fragonApp").controller("detalhesClienteController", function ($scope, clienteService, $routeParams) {

    clienteService
        .getClientePorId($routeParams.id)
        .then(function (data) {
            if (data.data.profissao == "1") {
                data.data.profissao = "Programador";
            } else if (data.data.profissao == "2") {
                data.data.profissao = "Analista";
            } else if (data.data.profissao == "3") {
                data.data.profissao = "Gerente";
            } else if (data.data.profissao == "4") {
                data.data.profissao = "Estagiário";
            } else if (data.data.profissao == "5") {
                data.data.profissao = "QA";
            } else {
                data.data.profissao = "Não Cadastrado";
            }
            $scope.Cliente = data;
        });
})