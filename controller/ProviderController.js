var db = require('../db_config.js');

exports.list = function(callback) {
    db.Provider.find({}, function(error, providers) {
        if (error) {
            callback({ error: 'Não foi possível retornar as operadoras' });
        } else {
            callback(providers);
        }
    });
};

exports.provider = function(id, callback) {

    db.Provider.findById(id, function(error, provider) {
        if (error) {
            callback({ error: 'Não foi possível retornar a Operadora' });
        } else {
            callback(provider);
        }
    });
};

exports.save = function(name, code, category, callback) {
    var a = new db.Provider({
        'name': name,
        'code': code,
        'category': category
    }).save(function(error, provider) {
        if (!error) {
            callback({ response: "Operadora adicionada com sucesso", provider: provider });
        } else {
            callback({ error: 'Não foi possível adicionar a Operadora' });
        }
    });
};

exports.update = function(id, name, code, category, callback) {
    db.Provider.findById(id, function(error, provider) {
        if (name) {
            provider.name = name;
        }
        if (code) {
            provider.code = code;
        }
        if (provider) {
            provider.category = category;
        }

        provider.save(function(error, provider) {
            if (!error) {
                callback({ response: "Operadora atualizada com sucesso", provider: provider });
            } else {
                callback({ error: 'Não foi possível atualizar a Operadora' });
            }
        });
    });
};

exports.delete = function(id, callback) {
    db.Provider.findById(id, function(error, provider) {
        if (error) {
            callback({ error: 'Não foi possível retornar a Operadora' });
        } else {
            provider.remove(function(error) {
                if (!error) {
                    callback({ response: "Operadora Excluída com Sucesso!" });
                }
            });
        }
    });
};