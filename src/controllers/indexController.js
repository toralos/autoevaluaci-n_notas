const db = require('../database/models/index');

module.exports = {
    home: function(req, res) {
        // Necesito las notas...
        db.Nota.findAll()
        .then(function(notas) {
            return res.render('index', {
                notas: notas
            })
        })
    }
}