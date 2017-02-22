app.service('crudService', function($http, $q) {
    var baseUrl = "http://localhost:5000";

    this.getContacts = function() {
        var deferred = $q.defer();
        $http.get(baseUrl + '/contacts')
            .then(
                function successCallback(data) {
                    deferred.resolve(data.data);
                },
                function errorCallback(reason) {
                    deferred.reject(reason);
                });
        return deferred.promise;
    };

    this.getContactById = function(id) {
        var deferred = $q.defer();
        $http.get(baseUrl + '/contacts/' + id)
            .then(
                function successCallback(data) {
                    deferred.resolve(data.data);
                },
                function errorCallback(reason) {
                    deferred.reject(reason);
                });
        return deferred.promise;
    };

    this.saveContact = function(contato) {
        var deferred = $q.defer();
        $http.post(baseUrl + '/contacts', contato)
            .then(
                function successCallback(data) {
                    deferred.resolve(data);

                },
                function errorCallback(reason) {
                    deferred.reject(reason);
                });
        return deferred.promise;
    };

    this.removeContact = function(contato) {
        var deferred = $q.defer();
        $http.delete(baseUrl + '/contacts/' + contato._id)
            .then(
                function successCallback(data) {
                    deferred.resolve(data);
                },
                function errorCallback(reason) {
                    deferred.reject(reason);
                });
        return deferred.promise;
    };
});