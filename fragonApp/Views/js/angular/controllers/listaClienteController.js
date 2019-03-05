angular.module("fragonApp").controller("listaClientesController", function ($scope, clienteService) {

    console.log

    $scope.Clientes = [];
    $scope.mensagem = "";
    $scope.filtro = "";


    clienteService
        .getClientes()
        .then(function (cliente) {
            $scope.Clientes = cliente;
        });

    $scope.deleta = function (cliente) {
        clienteService.deletar(cliente)
            .then(function () {
                var posCliente = $scope.Clientes.data.indexOf(cliente); //pega a posição do cliente que esta sendo deletado no banco
                $scope.Clientes.data.splice(posCliente, 1); //remove dinamicamente o cliente da lista
                $scope.mensagem = cliente.nome + " deletado";
            })
    }
    
  


})