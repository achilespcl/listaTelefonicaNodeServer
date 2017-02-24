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