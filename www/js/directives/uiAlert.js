app.directive('uiAlert', function() {
    return {
        templateUrl: 'templates/uiAlert.html',
        replace: true,
        restrict: "E", //{A - restrita ao atributo do elemento, E - restrita ao elemento, C - restrita a classe do elemento, M - Restrita ao comentário do elemento}
        scope: {
            title: '@'
        },
        transclude: true
    };
});