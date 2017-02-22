app.filter('formatName', function() {
    return function(input) {
        var listaDeNomes = input.split(' ');
        var listaDeNomesFormatada = listaDeNomes.map(function(nome) {
            if (/^(da|de)$/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return listaDeNomesFormatada.join(' ');
    };
});

//lembrar de importar esse filtro no node
app.filter('ellipsis', function() {
    return function(input, size) {
        if (input.length <= size) {
            return input;
        } else {
            var output = input.substring(0, (size || 10)) + "...";
            return output;
        }
    };
});

//lembrar de importar essa diretiva no node
app.directive('uiAlert', function() {
    return {
        template: '<div>uiAlert</div>'
    };
});