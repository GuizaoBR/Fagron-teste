angular.module("fragonApp", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {

        //$locationProvider.html5Mode(true);

        $routeProvider.when("/",
            { templateUrl: "/Cliente/html/lista.html", controller: "listaClientesController" })

        $routeProvider.when("/detalhes/:id",
            { templateUrl: "/Cliente/html/detalhes.html", controller: "detalhesClienteController" })
        $routeProvider.when("/cadastro",
            { templateUrl: "/Cliente/html/cadastro.html", controller: "cadastroController" })

        $routeProvider.when("/editar/:id",
            { templateUrl: "/Cliente/html/cadastro.html", controller: "cadastroController" })

        $routeProvider.otherwise(
            { redirecTo: "/VIEWS/Home/TIndex.cshtml" })
    })
    .constant("clienteApiUrl", "/api/Clientes/")
    .directive("mascara", function () {
        return {
            scope: {
                mask: "@",
            },
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                $(element).mask(scope.mask, {
                    reverse: false
                });
            }
        };
    }).directive('cpfValido', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {

                scope.$watch(attrs.ngModel, function () {

                    if (elem[0].value.length == 0)
                        ctrl.$setValidity('cpfValido', true);
                    else if (elem[0].value.length < 11) {
                        //aplicar o algoritmo de validação completo do CPF
                        ctrl.$setValidity('cpfValido', false);
                    }
                    else ctrl.$setValidity('cpfValido', true);
                });
            }
        };
    });