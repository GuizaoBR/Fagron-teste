angular.module("fragonApp", ["ngRoute", "ui.mask"])
    .config(function ($routeProvider, $locationProvider) {

        //$locationProvider.html5Mode(true);

        $routeProvider.when("/",
            { templateUrl: "/Views/Home/lista.html", controller: "listaClientesController" })

        $routeProvider.when("/detalhes/:id",
            { templateUrl: "/Views/Home/detalhes.html", controller: "detalhesClienteController" })
        $routeProvider.when("/cadastro",
            { templateUrl: "/Views/Home/cadastro.html", controller: "cadastroController" })

        $routeProvider.when("/editar/:id",
            { templateUrl: "/Views/Home/cadastro.html", controller: "cadastroController" })

        $routeProvider.otherwise(
            { redirecTo: "/Views/Home/Index.cshtml" })
    })
    .constant("clienteApiUrl", "/api/Clientes/")
    .directive('cpfValido', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                scope.$watch(attrs.ngModel, function () {

                    if (elem[0].value.length == 0)
                        ctrl.$setValidity('cpfValido', true);
                    else if (elem[0].value.length < 11) {
                        ctrl.$setValidity('cpfValido', false);
                    }
                    else ctrl.$setValidity('cpfValido', true);
                });
            }
        };
    })