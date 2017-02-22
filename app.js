var app = require('./app_config.js');
var db = require('./db_config.js');
var path = require('path');
var contactCtrl = require('./controller/ContactController.js');

var validator = require('validator');

app.get('/', function(req, res) {
    res.end('Servidor ON!');
});

app.get('/contacts', function(req, res) {
    contactCtrl.list(function(resp) {
        res.json(resp);
    });
});

app.get('/contacts/:id', function(req, res) {
    var id = validator.trim(validator.escape(req.params.id));
    contactCtrl.contact(id, function(resp) {
        res.json(resp);
    });
});

app.get('/lista_telefonica', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.get('/css/lista-telefonica', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/css/lista-telefonica.css'));
});

app.get('/js/controllers/lista_telefonica', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/js/controllers/listaTelefonicaController.js'));
});

app.get('/js/services/crud_service', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/js/services/crudService.js'));
});

app.get('/js/filters/formatName', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/js/filters/formatName.js'));
});

app.get('/js/app', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/js/listaTelefonica.js'));
});

app.get('/templates', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/templates/footer.html'));
});

app.post('/contacts', function(req, res) {
    console.log(req.body);
    var name = req.body.name;
    var phone = req.body.phone;
    var provider = req.body.provider;

    contactCtrl.save(name, phone, provider, function(resp) {
        res.json(resp);
    });
});

app.put('/contacts', function(req, res) {

    var id = validator.trim(validator.escape(req.body.id));
    var name = validator.trim(validator.escape(req.body.name));
    var phone = validator.trim(validator.escape(req.body.phone));
    var provider = req.body.provider;

    contactCtrl.update(id, name, phone, provider, function(resp) {
        res.json(resp);
    });

});

app.delete('/contacts/:id', function(req, res) {
    var id = validator.trim(validator.escape(req.params.id));

    contactCtrl.delete(id, function(resp) {
        res.json(resp);
    });

});