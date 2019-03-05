angular.module("fragonApp").factory("clienteService", function ($http, clienteApiUrl) {


    var getClientes = function () {
        return $http.get(clienteApiUrl);
    };
    var getClientePorId = function (id) {
        return $http.get(clienteApiUrl + id);
    };
    var atualizar = function (cliente) {
        return $http.put(clienteApiUrl + cliente.id, cliente);
    };
    var criar = function (cliente) {
        return $http.post(clienteApiUrl, cliente);
    };
    var deletar = function (cliente) {
        return $http.delete(clienteApiUrl + cliente.id);
    };
    return {
        getClientes: getClientes,
        getClientePorId: getClientePorId,
        atualizar: atualizar,
        criar: criar,
        deletar: deletar
    };

})