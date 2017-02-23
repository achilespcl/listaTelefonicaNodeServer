var db_string = 'mongodb://127.0.0.1/screencast_restful';
var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'Erro ao Conectar ao Banco!'));

db.once('open', function() {

    var contactSchema = mongoose.Schema({
        name: String,
        phone: String,
        date: Date,
        provider: { name: String, code: String, category: String }
    });

    var providerSchema = mongoose.Schema({
        name: String,
        code: String,
        category: String
    });

    exports.Contact = mongoose.model('Contact', contactSchema);
    exports.Provider = mongoose.model('Provider', providerSchema);
});