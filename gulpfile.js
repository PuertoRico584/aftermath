var gulp = require('gulp');
var sass = require('gulp-sass');
var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var archieml = require('archieml');
var parsed = archieml.load('key: value');
var fs = require('fs');

var navEnglish = ["POWER", "POLLUTION", "HEALTH", "WATER", "ECOLOGY", "ABOUT", "About the Project", "flipping the switch", "a fight for life", "the healing brigade", "rooted in el caño", "a natural revolution"];
var navSpanish = ["ELECTRICIDAD", "POLUCIÓN", "SALUD", "AGUA", "ECOLOGIA", "Sobre nosotros", "Sobre el proyecto", "prendiendo la luz", "una lucha por la vida", "la brigada curativa", "arraigados en el caño", "una revolución natural"];

gulp.task('connect', function(){

  app.set('port', (process.env.PORT || 8080));
  app.use(express.static(__dirname + '/public'));

  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });

  app.get('/', function(request, response) {
    response.render('pages/index', {navEng: navEnglish, navSpan: navSpanish, page: 'index', espanol: isEspanol(request)});
  });

  app.get('/about', function(request, response){
    var teamData = JSON.parse(fs.readFileSync('./public/data/team.json'));
    bodyData = JSON.parse(fs.readFileSync('./public/data/about.json'));
    response.render('pages/about', {navEng: navEnglish, navSpan: navSpanish, body: bodyData, team: teamData, page: 'about', espanol: isEspanol(request)});
  });

  app.get('/pages/:id', function(req, res){
    var pageName = req.params.id;
    var bodyData;
    var internetData;

    //Lindsay's interactive data
    // internetData = JSON.parse(fs.readFileSync('./public/data/internet.json'));

  	if (isEspanol(req)){
  		bodyData = JSON.parse(fs.readFileSync('./public/data/' + pageName + 'espanol.json'), strict=false);
  	} else {
  		bodyData = JSON.parse(fs.readFileSync('./public/data/' + pageName + '.json'), strict=false);
  	}
      res.render('pages/inner', {pageName: pageName, navEng: navEnglish, navSpan: navSpanish, internet: internetData, body: bodyData, page: '/pages/' + pageName, espanol: isEspanol(req)});

  });

  app.get('/*/*', function(request, response){
    response.render('pages/404', {navEng: navEnglish, navSpan: navSpanish, page: '404', espanol: isEspanol(request)});

  });

  app.get('*', function(request, response){
    response.render('pages/404', {navEng: navEnglish, navSpan: navSpanish, page: '404', espanol: isEspanol(request)});

  });

});

gulp.task('sass', function() {
  //send compiled styles to public/stylesheets
  console.log("compiling sass...");
    return gulp.src('./sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/stylesheets/'));

});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass']);

});


gulp.task('default', ['connect', 'sass', 'watch']);

var isEspanol = function(req){
	return req.query.lang && req.query.lang == "es";
};
