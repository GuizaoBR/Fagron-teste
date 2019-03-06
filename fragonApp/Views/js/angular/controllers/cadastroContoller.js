angular.module("fragonApp").controller("cadastroController", function ($scope, clienteService, $routeParams) {

    $scope.Cliente = {};
    $scope.mensagem = "";
    $scope.CPFErro = "";
    if ($routeParams.id) {
        clienteService
            .getClientePorId($routeParams.id)
            .then(function (Cliente) {

                $scope.Cliente = Cliente.data;
            });
    } 
    
    var listaCPF = []
    clienteService
        .getClientes()
        .then(function (cliente) {
            listaCPF = cliente.data;

        });
    /*var dataAtual = new Date,
        anoAtual = dataAtual.getFullYear;
    var anoNascimento = $scope.Cliente.Nascimento;
    console.log(anoNascimento.substring(6, 10))
    $scope.Cliente.Idade = */
    
    
    $scope.Salvar = function () {
        for (let cliente = 0; cliente < listaCPF.length; cliente++) {
            if ($scope.Cliente.cpf == listaCPF[cliente].cpf) {
                if ($routeParams.id) {
                    var clienteEditado = {}
                    clienteService.getClientePorId($routeParams.id)
                        .then(function (cliente) {
                            clienteEditado = cliente.data;
                        })
                    if (clienteEditado.cpf == $scope.Cliente.cpf) {
                        $scope.formulario.$valid = true
                    }
                } else {
                    $scope.CPFErro = "CPF já cadastrado";
                    $scope.formulario.$valid = false;
                    break;
                }
            } else {
                $scope.CPFErro = "";
            }
        }
     

        if ($scope.formulario.$valid) {

       
            if ($routeParams.id) {
                clienteService.atualizar($scope.Cliente).then(function () {
                    $scope.mensagem = "Cliente atualizado";
                })
            } else {
            clienteService.criar($scope.Cliente)
                .then(function () {
                    $scope.mensagem = "Cliente " + $scope.Cliente.nome + " cadastrado";
                    $scope.Cliente = {};
                    $scope.formulario.$setPristine();

                })
            }
        }
    
    }

    

})