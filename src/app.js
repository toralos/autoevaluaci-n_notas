const path = require('path');
const methodOverride = require('method-override');

const express = require('express');
const app = express();

const indexRouter = require('./routers/indexRouter');
const notasRouter = require('./routers/notasRouter');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

app.use(methodOverride('_method'))

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use(express.static(path.resolve(__dirname, '../public')))

app.use('/', indexRouter);
app.use('/notas', notasRouter);

app.listen(3000, function() {
    console.log("Servidor corriendo en el puerto 3000")
    console.log("http://localhost:3000")
})