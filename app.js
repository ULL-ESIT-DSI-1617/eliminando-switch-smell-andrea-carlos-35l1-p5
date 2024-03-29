
var express = require('express')
var app = express()
var path = require('path');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');
var file = './user.json'
var jsonfile = require('jsonfile');
var users = require('./user.json');

//Permite coger parámetros de la url(query string)
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'example',
    resave: true,
    saveUninitialized: true
}));

//Comprueba si ya esta autorizado en esta sesion
var auth = function(req, res, next) {
  if (req.session && req.session.user in users)
    return next();
  else
    return res.sendStatus(401);
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//En la raiz pone las opciones para login y acceder contenido (no deberia poder acceder al no estar autentificado)
app.get('/', function(req, res){
  res.render('noautentificado', { message: 'Para acceder al contenido es necesario autentificarse:' } );
});

//Muestra la vista con el formulario para log in
app.get('/login', function(req, res){
  res.render('login');
});

var users = {
	dsi1617: bcrypt.hashSync("dsi1617password")
};

//Genera el json con los usuarios especificados en la variable users

jsonfile.writeFile(file, users, {spaces: 2}, (err)=>{
	console.error(err);
});

//Obtiene la respuesta del formulario y comprueba si es correcto
app.post('/login', function(req, res){
    if (!req.body.username || !req.body.password) {
      console.log('login failed');
        res.render('noautentificado', { message: 'No deje ningún campo vacio' } );
    } else if(req.body.username in users &&
              bcrypt.compareSync(req.body.password, users[req.body.username])) {
      req.session.user = req.body.username;
      req.session.admin = true;
      console.log('registrado');
      res.render('autentificado', { message: 'Estas autentificado, accede al contenido' } );
    } else {
      console.log('login failed');
      res.render('noautentificado', { message: 'Login Failed' } );
    }
  });

  //Borra la sesion.
  app.get('/logout', function (req, res) {
    req.session.destroy();
    res.render('noautentificado', { message: 'Sesion cerrada correctamente.' } );
  });

app.use('/content',auth, express.static(path.join(__dirname, 'conversor')));

  var server = app.listen(process.env.PORT || 8089, ()=> {
	var host = server.address().address
	var port = server.address().port

	console.log('Conectado al puerto 8089')
})
