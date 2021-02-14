const db = require('../database/models/index')

module.exports = {
    detail: function(req, res) {
        db.Nota.findByPk(req.params.id)
        .then(function(notas) {
            return res.render('detail', {
                notas: notas
            })
        })
    },


    search: function(req, res) {
        // return res.send(req.query)
        db.Nota.findAll({
            where: {
                titulo: {
                    [db.Sequelize.Op.like]: '%' + req.query.search + '%',
                }
            }
        })
        .then(function(listado) {
            return res.render('searchResult', {
                listado: listado,
                laQuery: req.query.search
            })
        })
    },


    create: function(req, res) {
        res.render('notaCreate')
    },
    save: function(req, res) {
        // req.body
        db.Nota.findOne({
            where: {
                titulo: req.body.titulo
            }
        })
        .then(function(laNota) {
            if(laNota == null) {
                db.Nota.create({
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    
                })
                .then(function() {
                    res.redirect('/')
                })
            } else {
                res.send("Esta nota ya existe")
            }
        })
    },
    edit: function(req, res) {
        db.Nota.findByPk(req.params.id)
        .then(function(nota) {
            res.render('notaEdit', { nota })
        })
    },
    update: function(req, res) {
        db.Nota.update({
            titulo: req.body.titulo,
            texto: req.body.texto,
            
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(verQueOnda) {
            res.redirect('/notas/detail/'+ req.params.id)
        })
    },

    delete: function(req, res) {
        db.Nota.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(quePaso) {
            return res.send('Lo que me retorna es... ' + quePaso)
        })
        .catch(function(error) {
            return res.send(error)
        })
    },
    
    
    
    
    
    
    
    
    
    
    
    
    async: function(req, res) {
        return res.render('movieAsync')
    }
}