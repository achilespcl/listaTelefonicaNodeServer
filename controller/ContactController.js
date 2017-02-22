var db = require('../db_config.js');

exports.list = function(callback) {
    db.Contact.find({}, function(error, contacts) {
        if (error) {
            callback({ error: 'Não foi possível retornar os contatos' });
        } else {
            callback(contacts);
        }
    });
};

exports.contact = function(id, callback) {

    db.Contact.findById(id, function(error, contact) {
        if (error) {
            callback({ error: 'Não foi possível retornar o Contato' });
        } else {
            callback(contact);
        }
    });
};

exports.save = function(name, phone, provider, callback) {
    new db.Contact({
        'name': name,
        'phone': phone,
        'date': new Date(),
        'provider': provider
    }).save(function(error, contact) {
        if (!error) {
            callback({ response: "Contato adicionado com sucesso", contact: contact });
        } else {
            callback({ error: 'Não foi possível adicionar o Contato' });
        }
    });
};

exports.update = function(id, name, phone, provider, callback) {
    db.Contact.findById(id, function(error, contact) {
        if (name) {
            contact.name = name;
        }
        if (phone) {
            contact.phone = phone;
        }
        if (provider) {
            contact.provider = provider;
        }

        contact.save(function(error, contact) {
            if (!error) {
                callback({ response: "Contato atualizado com sucesso", contact: contact });
            } else {
                callback({ error: 'Não foi possível atualizar o Contato' });
            }
        });
    });
};

exports.delete = function(id, callback) {
    db.Contact.findById(id, function(error, contact) {
        if (error) {
            callback({ error: 'Não foi possível retornar o Contato' });
        } else {
            contact.remove(function(error) {
                if (!error) {
                    callback({ response: "Contato Excluído com Sucesso!" });
                }
            });
        }
    });
};