app.controller('listaTelefonicaCtrl', function($scope, crudService) {
    $scope.lista = 'Lista Telefonica';
    $scope.contatos = [];
    $scope.providers = [];

    $scope.direcaoDaOrdenacao = false;

    var carregarContatos = function() {
        crudService.getContacts()
            .then(
                function successCallback(data) {
                    $scope.contatos = data;
                },
                function errorCallback(reason) {
                    $scope.error = 'Não foi possível carregar os dados!';
                });
    };

    var carregarOperadoras = function() {
        crudService.getProviders()
            .then(
                function successCallback(data) {
                    $scope.providers = data;
                },
                function errorCallback(reason) {
                    $scope.error = 'Não foi possível carregar os dados!';
                });
    };

    $scope.addContato = function(contato) {
        if ($scope.contatoForm.$valid) {
            crudService.saveContact(contato)
                .then(
                    function successCallback(data) {
                        carregarContatos();
                        delete $scope.contato;
                        $scope.contatoForm.$setPristine();
                    },
                    function errorCallback(reason) {
                        console.log(reason);
                    });
        } else {
            window.alert('Verifique se os Campos estão Preenchidos Corretamente!');
        }
    };

    $scope.apagarContatos = function(contatos) {

        var removeContatos = contatos.filter(function(contato) {
            if (contato.selecionado) return contato;
        });

        if (removeContatos) {
            for (i = 0; i < removeContatos.length; i++) {
                crudService.removeContact(removeContatos[i])
                    .then(
                        function successCallback(data) {
                            $scope.contatos.splice($scope.contatos.indexOf(removeContatos[i]), 1);
                        },
                        function errorCallback(reason) {
                            console.log(reason);
                        });
            }
        }
    };

    $scope.isContatoSelecionado = function(contatos) {
        return contatos.some(function(contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function(campo) {
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        $scope.criterioDeOrdenacao = campo;
    };

    carregarContatos();
    carregarOperadoras();
});